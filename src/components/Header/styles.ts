import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${colors.cream};
  padding: 40px 0;
  text-align: center;

  &.hero {
    background-image: url('/images/hero-bg.png');
    background-size: cover;
    background-position: center;
    padding: 64px 0 40px;
  }
`

export const Logo = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.primary};
  margin-bottom: 138px;

  &.small {
    margin-bottom: 0;
  }
`

export const Tagline = styled.p`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.primary};
  max-width: 540px;
  margin: 0 auto;
  line-height: 42px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;

  a {
    font-size: 18px;
    font-weight: 900;
    color: ${colors.primary};
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease;
    position: relative;

    &:hover {
      color: ${colors.primary};
      opacity: 0.8;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${colors.primary};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`

export const CartButton = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`
