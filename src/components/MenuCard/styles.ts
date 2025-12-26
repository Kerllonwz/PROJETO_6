import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.primary};
  padding: 12px;
  color: ${colors.lightText};
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
`

export const Title = styled.h4`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.75;
  margin-bottom: 12px;
  flex: 1;
`

export const Button = styled.button`
  background-color: ${colors.lightText};
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 700;
  padding: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;

  &:hover {
    background-color: ${colors.white};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`
