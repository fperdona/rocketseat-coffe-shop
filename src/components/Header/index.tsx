import { HeaderContainer, UserLocation, UserCart } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'

import logoCoffeDelivery from '../../assets/logo-coffe-delivery.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <span>
          <img src={logoCoffeDelivery} alt="" />
        </span>
      </NavLink>
      <nav>
        <UserLocation>
          <MapPin size={22} weight="fill" />
          <span>Joinville, SC</span>
        </UserLocation>
        <UserCart>
          <NavLink to="/cart" title="Carrinho de Compras">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </UserCart>
      </nav>
    </HeaderContainer>
  )
}
