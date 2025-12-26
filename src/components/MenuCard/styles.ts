import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.primary};
  padding: 8px;
  color: ${colors.lightText};
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
`

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  flex: 1;
`

export const Button = styled.button`
  background-color: ${colors.lightText};
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }
`
