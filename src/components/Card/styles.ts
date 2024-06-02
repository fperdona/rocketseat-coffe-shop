import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 0.5rem 2rem 0.5rem 2rem;
`
export const CoffeeImg = styled.img`
  width: 120px;
  height: 120px;
  margin-top: -3rem;
`

export const Tags = styled.div`
  ${mixins.fonts.tag}
  display: flex;
  gap: 0.5rem;
  > span {
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    padding: 4px 8px;
    border-radius: 8px;
    text-transform: uppercase;
    gap: 1rem;
  }
`
export const Title = styled.div`
  ${mixins.fonts.titleS}
  color: ${({ theme }) => theme.colors['base-subtitle']};
`
export const Description = styled.div`
  text-align: center;
  ${mixins.fonts.textS}
  color: ${({ theme }) => theme.colors['base-label']};
`
export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  width: 100%;
`
export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;
  color: ${({ theme }) => theme.colors['base-text']};

  span:first-child {
    ${mixins.fonts.textS};
  }

  span:last-child {
    ${mixins.fonts.titleM};
  }
`
export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  > button {
    display: flex;
    border-radius: 6px;
    padding: 0.5rem;
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.colors['yellow-dark'] : theme.colors['purple-dark']};
    transition: background-color 0.2s;
    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors.yellow : theme.colors.purple};
    }
  }
`
export const QuantityInput = styled.div`
  padding: 0.55rem;
  border-radius: 6px;
  display: flex;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  > button svg {
    background-color: transparent;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.purple};
  }
  > button svg:hover {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`
