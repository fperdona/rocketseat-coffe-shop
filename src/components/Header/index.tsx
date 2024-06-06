import { HeaderContainer, UserLocation, UserCart } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { useCart } from '../../hooks/useCart' // Importa o hook personalizado para acessar o contexto do carrinho

import logoCoffeDelivery from '../../assets/logo-coffe-delivery.svg'
import { Link } from 'react-router-dom'

export function Header() {
  const { cart } = useCart() // Retorna o objeto cart, que contém os itens no carrinho.
  return (
    <HeaderContainer>
      {/* Link para página inicial */}
      <Link to="/" title="Home">
        <span>
          <img src={logoCoffeDelivery} alt="" />
        </span>
      </Link>
      <nav>
        <UserLocation>
          <MapPin size={22} weight="fill" />
          <span>Joinville, SC</span>
        </UserLocation>
        <UserCart>
          {/* Link para página do carrinho, desativado se o carrinho estiver vazio */}
          <Link to={`cart`} aria-disabled={cart.length === 0}>
            <ShoppingCart size={22} weight="fill" />
            {/* Exibe a quantidade de itens no carrinho, se houver */}
            {cart.length > 0 ? <span>{cart.length}</span> : null}
          </Link>
        </UserCart>
      </nav>
    </HeaderContainer>
  )
}
