import styled from 'styled-components'
import { colors } from '../../styles'

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 56px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0 32px;
`

export const RestaurantInfo = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0 32px;
`

export const Category = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${colors.white};
`
