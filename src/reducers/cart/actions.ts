/* eslint-disable no-unused-vars */

import { NavigateFunction } from 'react-router-dom'
import { OrderInfo } from '../../pages/ShoppingCart'
import { Item } from './reducer'

// Enumeração dos tipos de ações disponíveis
export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

// Definição dos tipos de ações possíveis
export type Actions =
  // Ação para adicionar um item ao carrinho
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: Item
      }
    }
  // Ação para remover um item do carrinho ou decrementar sua quantidade
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM
      payload: {
        itemId: Item['id']
      }
    }
  // Ação para finalizar o processo de compra (checkout)
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: OrderInfo // Informações do pedido
        callback: NavigateFunction // Função de callback para redirecionamento
      }
    }

// Cria uma ação para adicionar um item ao carrinho
export function addItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions // Indica que essa ação é do tipo Actions
}

// Cria uma ação para remover um item do carrinho
export function removeItemAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions
}

// Cria uma ação para incrementar a quantidade de um item no carrinho
export function incrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

// Cria uma ação para decrementar a quantidade de um item no carrinho
export function decrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

// Cria uma ação para finalizar o processo de compra (checkout) e limpar o carrinho
export function checkoutCartAction(
  order: OrderInfo,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order, // Contem as informacoes do pedido a ser finalizado
      callback, // Este é um tipo de função chamada de NavigateFunction, que é usada para realizar a navegação programática na aplicação
    },
  } satisfies Actions
}
