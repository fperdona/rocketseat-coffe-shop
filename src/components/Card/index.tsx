import { ShoppingCartSimple, Check } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'
import { QuantityInput } from '../Form/QuantityInput'
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
  const theme = useTheme()
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }
  function handleAddItem() {
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
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
              />
            ) : (
              <ShoppingCartSimple size={22} color={theme.colors['base-card']} />
            )}
          </button>
        </Order>
      </Control>
    </Container>
  )
}
