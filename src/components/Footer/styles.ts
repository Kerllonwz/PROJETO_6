import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBar = styled.footer`
  background-color: ${colors.cream};
  padding: 40px 0;
  text-align: center;
  margin-top: 120px;
`

export const Logo = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.primary};
  margin-bottom: 32px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 80px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Description = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${colors.primary};
  max-width: 480px;
  margin: 0 auto;
`
