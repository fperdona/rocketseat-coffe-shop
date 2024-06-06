import { Fragment } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextInput } from '../../components/Form/TextInput'
import { Radio } from '../../components/Form/Radio'
import { coffees } from '../../../data.json'
import { useCart } from '../../hooks/useCart'
import { QuantityInput } from '../../components/Form/QuantityInput'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'

import {
  Container,
  InfoContainer,
  AddressContainer,
  AddressHeading,
  PaymentContainer,
  CartTotal,
  CartTotalInfo,
  Coffee,
  CoffeeInfo,
  CheckoutButton,
  PaymentHeading,
  AddressForm,
  PaymentOptions,
  PaymentErrorMessage,
} from './styles'

// Definição dos tipos para os dados do formulário
type FormInputs = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

// Definição do schema de validação para os dados do formulário
const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

const shippingPrice = 3.5

export function ShoppingCart() {
  // Utilização do hook useCart para acessar o estado do carrinho e suas funções
  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  } = useCart()

  // coffeesInCart: representa os cafés que estão no carrinho do usuário, com algumas modificações adicionais.
  // cart: array de objetos que representam os itens no carrinho
  // coffees: array que contém informações sobre todos os cafés disponíveis para compra
  const coffeesInCart = cart.map((item) => {
    // Mapeia item a item do carrinho ate encontrar o cafe correspondente
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)
    // Caso nao encontre apresenta um erro
    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }
    // Se o café correspondente for encontrado, criamos um novo objeto com base nas informações desse café
    // e adiciona-se uma nova chave quantity, que representa a quantidade desse café no carrinho
    // assim, cada objeto em coffeesInCart contém todas as informações do café, além de sua quantidade no carrinho.
    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  // Cálculo do preço total dos itens no carrinho
  // O método reduce é usado para iterar sobre cada item em coffeesInCart e acumular o resultado do cálculo do preço total.
  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  // Utilização do useForm para gerenciar o estado do formulário e realizar a validação
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  // Obtém o método de pagamento selecionado pelo usuário
  const selectedPaymentMethod = watch('paymentMethod')

  // Funções para manipular a quantidade e remover itens do carrinho
  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId)
  }

  // Função para lidar com o checkout do pedido
  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    // Verifica se há itens no carrinho
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }
    // Chama a função de checkout passando os dados do formulário
    checkout(data)
  }
  return (
    <div>
      <Container>
        <InfoContainer>
          <h2>Complete seu pedido</h2>
          <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
            <AddressContainer>
              <AddressHeading>
                <MapPin size={22} />
                <div>
                  <span>Endereco de Entrega</span>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </AddressHeading>
              <AddressForm>
                <TextInput
                  placeholder="CEP"
                  type="number"
                  containerProps={{ style: { gridArea: 'cep' } }}
                  error={errors.cep}
                  {...register('cep', { valueAsNumber: true })}
                />

                <TextInput
                  placeholder="Rua"
                  containerProps={{ style: { gridArea: 'street' } }}
                  error={errors.street}
                  {...register('street')}
                />

                <TextInput
                  placeholder="Número"
                  containerProps={{ style: { gridArea: 'number' } }}
                  error={errors.number}
                  {...register('number')}
                />

                <TextInput
                  placeholder="Complemento"
                  optional
                  containerProps={{ style: { gridArea: 'fullAddress' } }}
                  error={errors.fullAddress}
                  {...register('fullAddress')}
                />

                <TextInput
                  placeholder="Bairro"
                  containerProps={{ style: { gridArea: 'neighborhood' } }}
                  error={errors.neighborhood}
                  {...register('neighborhood')}
                />

                <TextInput
                  placeholder="Cidade"
                  containerProps={{ style: { gridArea: 'city' } }}
                  error={errors.city}
                  {...register('city')}
                />

                <TextInput
                  placeholder="UF"
                  maxLength={2}
                  containerProps={{ style: { gridArea: 'state' } }}
                  error={errors.state}
                  {...register('state')}
                />
              </AddressForm>
            </AddressContainer>
            <PaymentContainer>
              <PaymentHeading>
                <CurrencyDollar size={22} />
                <div>
                  <span>Pagamento</span>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </PaymentHeading>
              <PaymentOptions>
                <div>
                  <Radio
                    isSelected={selectedPaymentMethod === 'credit'}
                    {...register('paymentMethod')}
                    value="credit"
                  >
                    <CreditCard size={16} />
                    <span>Cartão de crédito</span>
                  </Radio>

                  <Radio
                    isSelected={selectedPaymentMethod === 'debit'}
                    {...register('paymentMethod')}
                    value="debit"
                  >
                    <Bank size={16} />
                    <span>Cartão de débito</span>
                  </Radio>

                  <Radio
                    isSelected={selectedPaymentMethod === 'cash'}
                    {...register('paymentMethod')}
                    value="cash"
                  >
                    <Money size={16} />
                    <span>Dinheiro</span>
                  </Radio>
                </div>

                {errors.paymentMethod ? (
                  <PaymentErrorMessage role="alert">
                    {errors.paymentMethod.message}
                  </PaymentErrorMessage>
                ) : null}
              </PaymentOptions>
            </PaymentContainer>
          </form>
        </InfoContainer>
        <InfoContainer>
          <h2>Cafés selecionados</h2>
          <CartTotal>
            {coffeesInCart.map((coffee) => (
              <Fragment key={coffee.id}>
                <Coffee>
                  <div>
                    <img src={coffee.image} alt={coffee.title} />

                    <div>
                      <span>{coffee.title}</span>

                      <CoffeeInfo>
                        <QuantityInput
                          quantity={coffee.quantity}
                          incrementQuantity={() =>
                            handleItemIncrement(coffee.id)
                          }
                          decrementQuantity={() =>
                            handleItemDecrement(coffee.id)
                          }
                        />
                        <button onClick={() => handleItemRemove(coffee.id)}>
                          <Trash />
                          <span>Remover</span>
                        </button>
                      </CoffeeInfo>
                    </div>
                  </div>

                  <aside>R$ {coffee.price?.toFixed(2)}</aside>
                </Coffee>

                <span />
              </Fragment>
            ))}

            <CartTotalInfo>
              <div>
                <span>Total de itens</span>
                <span>
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(totalItemsPrice)}
                </span>
              </div>

              <div>
                <span>Entrega</span>
                <span>
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(shippingPrice)}
                </span>
              </div>

              <div>
                <span>Total</span>
                <span>
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(totalItemsPrice + shippingPrice)}
                </span>
              </div>
            </CartTotalInfo>

            <CheckoutButton type="submit" form="order">
              Confirmar pedido
            </CheckoutButton>
          </CartTotal>
        </InfoContainer>
      </Container>
    </div>
  )
}
