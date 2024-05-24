import {
  Container,
  CoffeeImg,
  Tags,
  Title,
  Description,
  Control,
  Price,
  Order,
  QuantityInput,
} from './styles'
import { ShoppingCartSimple, Minus, Plus } from 'phosphor-react'
import { useTheme } from 'styled-components'
import expresso from '../../assets/expresso.svg'
export function Card() {
  const theme = useTheme()
  return (
    <Container>
      <CoffeeImg src={expresso} alt="" />
      <Tags>Tradicional</Tags>
      <Title>Expresso Tradicional</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <Control>
        <Price>
          <span>R$</span>
          <span>9,90</span>
        </Price>
        <Order>
          <QuantityInput>
            <button>
              <Minus size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} />
            </button>
          </QuantityInput>
          <button>
            <ShoppingCartSimple
              size={22}
              weight="fill"
              color={theme.colors['base-card']}
            />
          </button>
        </Order>
      </Control>
    </Container>
  )
}
