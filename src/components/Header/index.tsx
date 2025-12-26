import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import * as S from './styles'

interface HeaderProps {
  variant?: 'hero' | 'simple'
  onOpenCart?: () => void
}

const Header = ({ variant = 'hero', onOpenCart }: HeaderProps) => {
  const { getTotalItems } = useCart()

  if (variant === 'hero') {
    return (
      <S.HeaderBar className="hero">
        <div className="container">
          <S.Logo>efood</S.Logo>
          <S.Tagline>
            Viva experiências gastronômicas no conforto da sua casa
          </S.Tagline>
        </div>
      </S.HeaderBar>
    )
  }

  return (
    <S.HeaderBar>
      <div className="container">
        <S.Nav>
          <Link to="/">Restaurantes</Link>
          <Link to="/">
            <S.Logo className="small">efood</S.Logo>
          </Link>
          <S.CartButton onClick={onOpenCart}>
            {getTotalItems()} produto(s) no carrinho
          </S.CartButton>
        </S.Nav>
      </div>
    </S.HeaderBar>
  )
}

export default Header
