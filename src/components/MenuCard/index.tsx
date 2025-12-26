import { MenuItem } from '../../types'
import * as S from './styles'

interface Props {
  item: MenuItem
  onAddToCart: (item: MenuItem) => void
}

const MenuCard = ({ item, onAddToCart }: Props) => {

  const handleAddToCart = () => {
    onAddToCart(item)
  }

  return (
    <S.Card>
      <S.Image src={item.image} alt={item.name} />
      <S.Title>{item.name}</S.Title>
      <S.Description>{item.description}</S.Description>
      <S.Button onClick={handleAddToCart}>
        Adicionar ao carrinho
      </S.Button>
    </S.Card>
  )
}

export default MenuCard
