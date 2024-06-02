import styled from 'styled-components'

import { mixins } from '../../../styles/mixins'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors['base-input']};

  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme.colors['base-button']};
  }

  input {
    color: ${({ theme }) => theme.colors['base-text']};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 0.75rem;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }

  span {
    color: ${({ theme }) => theme.colors['base-label']};
    padding-right: 0.75rem;
    ${mixins.fonts.textS};
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`
