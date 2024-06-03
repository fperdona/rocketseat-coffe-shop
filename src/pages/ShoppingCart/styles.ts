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

  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
`
export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
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
export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 4rem;
      height: 4rem;
    }

    display: flex;
    align-items: stretch;
    gap: 1.25rem;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    padding: 6px 0.5rem;
    background-color: ${({ theme }) => theme.colors['base-button']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.5rem2;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

export const CartTotal = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 2.75rem;
  padding: 2.5rem;

  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    margin: 1.5rem 0;
  }
`

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${mixins.fonts.textS};
    }

    span:last-child {
      ${mixins.fonts.textM};
    }
  }
`

export const CheckoutButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  ${mixins.fonts.buttonG};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  border-radius: 6px;
`
