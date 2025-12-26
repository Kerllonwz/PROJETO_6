import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterBar>
      <div className="container">
        <S.Logo>efood</S.Logo>
        <S.SocialLinks>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter.png" alt="Twitter" />
          </a>
        </S.SocialLinks>
        <S.Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.Description>
      </div>
    </S.FooterBar>
  )
}

export default Footer
