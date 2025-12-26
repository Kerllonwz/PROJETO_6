import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
`

export const Sidebar = styled.aside`
  background-color: ${colors.primary};
  width: 100%;
  max-width: 360px;
  padding: 32px 8px;
  display: flex;
  flex-direction: column;
  color: ${colors.lightText};
`

export const CartItem = styled.div`
  background-color: ${colors.lightText};
  color: ${colors.primary};
  padding: 8px;
  margin-bottom: 16px;
  position: relative;
  display: flex;
  gap: 8px;
`

export const CartImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const CartItemInfo = styled.div`
  flex: 1;
`

export const CartItemTitle = styled.h4`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const CartItemPrice = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${colors.primary};
  cursor: pointer;
  font-size: 12px;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  margin: 24px 0 16px;
  color: ${colors.lightText};
`

export const CheckoutButton = styled.button`
  background-color: ${colors.lightText};
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 8px;

  &:hover {
    opacity: 0.8;
  }
`

export const EmptyCart = styled.p`
  text-align: center;
  padding: 40px 20px;
  color: ${colors.lightText};
`
