import { ShoppingCartSimple, Check } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'
import { QuantityInput } from '../Form/QuantityInput'
import { useCart } from '../../hooks/useCart'
import {
  Container,
  CoffeeImg,
  Tags,
  Title,
  Description,
  Control,
  Price,
  Order,
} from './styles'

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: Props) {
  const theme = useTheme() // Obtém o tema atual do styled-components
  const [quantity, setQuantity] = useState(1) // Define o estado da quantidade inicial como 1
  const [isItemAdded, setIsItemAdded] = useState(false) // Define o estado do item como não adicionado inicialmente
  const { addItem } = useCart() // Obtém a função addItem do hook useCart

  function incrementQuantity() {
    setQuantity((state) => state + 1) // Incrementa a quantidade
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1) // Decrementa a quantidade se for maior que 1
    }
  }
  function handleAddItem() {
    addItem({ id: coffee.id, quantity }) // Adiciona o item ao carrinho com a quantidade selecionada
    setIsItemAdded(true) // Define o estado do item como adicionado
    setQuantity(1) // Reinicia a quantidade para 1
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false) // Define o estado do item como não adicionado após um curto período
      }, 1000) // Tempo de exibição do ícone de confirmação em milissegundos
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout) // Limpa o timeout ao desmontar o componente
      }
    }
  }, [isItemAdded])

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>
      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
        <Order $itemAdded={isItemAdded}>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <Check
                weight="fill"
                size={22}
                color={theme.colors['base-card']}
              /> // Renderiza o ícone de confirmação se o item for adicionado
            ) : (
              <ShoppingCartSimple size={22} color={theme.colors['base-card']} />
              // Renderiza o ícone de carrinho de compras se o item não for adicionado
            )}
          </button>
        </Order>
      </Control>
    </Container>
  )
}
