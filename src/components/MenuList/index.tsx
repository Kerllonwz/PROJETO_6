import { MenuItem } from '../../types'
import MenuCard from '../MenuCard'
import * as S from './styles'

interface Props {
  items: MenuItem[]
  onAddToCart: (item: MenuItem) => void
}

const MenuList = ({ items, onAddToCart }: Props) => {
  return (
    <S.List>
      {items.map((item) => (
        <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </S.List>
  )
}

export default MenuList
