import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 72.5rem;
  padding: 2rem 1.25rem;
  margin: 0 auto;
  > div:first-child {
    display: flex;
    flex-direction: column;
    width: 40rem;
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    width: 28rem;
  }
`
export const InfoContainer = styled.div`
  > h2 {
    ${mixins.fonts.titleXS}
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 1.25rem;
  }
`
export const AddressContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const AddressHeading = styled.div`
  display: flex;
  gap: 0.5rem;
  span {
    ${mixins.fonts.textM}
  }
  p {
    ${mixins.fonts.textS}
  }
  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
export const PaymentHeading = styled.div`
  display: flex;
  gap: 0.5rem;
  span {
    ${mixins.fonts.textM}
  }
  p {
    ${mixins.fonts.textS}
  }
  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`
export const PaymentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 1.25rem;
`
export const OrderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 2.75rem;
  padding: 2.5rem;
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 1rem 0.75rem;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  grid-area: 'cep';
`
