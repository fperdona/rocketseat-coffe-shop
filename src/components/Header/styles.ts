import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 72.5rem;
  padding: 2rem 1.25rem;
  margin: 0 auto;
  nav {
    display: flex;
    gap: 1rem;
  }
`

const BaseItemMenu = styled.header`
  border-radius: 4px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mixins.fonts.textS};
`

export const UserLocation = styled(BaseItemMenu)`
  background: ${({ theme }) => theme.colors['purple-light']};
  color: ${({ theme }) => theme.colors['purple-dark']};
  gap: 0.25rem;
`
export const UserCart = styled(BaseItemMenu)`
  background: ${({ theme }) => theme.colors['yellow-light']};
  a {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
