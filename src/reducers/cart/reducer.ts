import { produce } from 'immer'
import { ActionTypes, Actions } from './actions'
import { OrderInfo } from '../../pages/ShoppingCart'

export interface Item {
  id: string
  quantity: number
}

export interface Order extends OrderInfo {
  id: number
  items: Item[]
}

interface CartState {
  cart: Item[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
  // Verifica se o item ja existe no carinho de compra
  // Caso exista, adiciona-se a nova quantidade
  // Caso nao exista, adiciona-se o item
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.item.id,
        )

        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.item.quantity
        } else {
          draft.cart.push(action.payload.item)
        }
      })

    case ActionTypes.REMOVE_ITEM:
      // Encontra o item a ser removido
      // Remove o item
      return produce(state, (draft) => {
        const itemToRemoveId = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId,
        )
        draft.cart.splice(itemToRemoveId, 1)
      })

    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      // Quando o usuário deseja aumentar a quantidade de um item no carrinho, esta ação é despachada.
      // O reducer encontra o item com o itemId correspondente e incrementa sua quantidade em 1
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToIncrement?.id) {
          itemToIncrement.quantity += 1
        }
      })

    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      // Esta ação é despachada quando o usuário deseja diminuir a quantidade de um item
      // O reducer encontra o item com o itemId correspondente e, se a quantidade for maior que 1, decrementa em 1.
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )
        if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1
        }
      })

    // Finaliza o processo de compra, criando um novo pedido e limpando o carrinho
    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(), // Gera um ID único para o pedido
          items: state.cart, // Adiciona os itens do carrinho ao pedido
          ...action.payload.order, // Adiciona outras informações do pedido, como endereço, método de pagamento, etc.
        }
        draft.orders.push(newOrder) // Adiciona o novo pedido à lista de pedidos
        draft.cart = [] // Esvazia o carrinho
        // Redireciona o usuário para a página de sucesso do pedido
        action.payload.callback(`/order/${newOrder.id}/success`)
      })

    default:
      return state
  }
}
