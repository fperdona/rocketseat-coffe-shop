import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Hero = styled.div`
  position: relative;
  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`
export const HeroContent = styled.div`
  max-width: 72.5rem;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors['base-title']};
  }
  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`
export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`

export const CoffeeList = styled.div`
  max-width: 72.5rem;
  padding: 2rem 1.25rem 9.375rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  /* gap: 3rem; */

  > h2 {
    ${mixins.fonts.titleL}
    margin-bottom: 4rem;
  }
`
