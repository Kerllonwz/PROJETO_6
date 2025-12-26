import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import * as S from './styles'

interface HeaderProps {
  variant?: 'hero' | 'simple'
  onOpenCart?: () => void
}

const HeroHeader = () => {
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

const SimpleHeader = ({ onOpenCart }: { onOpenCart?: () => void }) => {
  const { getTotalItems } = useCart()

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

const Header = ({ variant = 'hero', onOpenCart }: HeaderProps) => {
  if (variant === 'hero') {
    return <HeroHeader />
  }

  return <SimpleHeader onOpenCart={onOpenCart} />
}

export default Header
