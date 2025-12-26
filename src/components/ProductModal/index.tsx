import { MenuItem } from '../../types'
import * as S from './styles'

interface Props {
  isOpen: boolean
  onClose: () => void
  item: MenuItem | null
  onAddToCart: () => void
}

const ProductModal = ({ isOpen, onClose, item, onAddToCart }: Props) => {
  if (!isOpen || !item) return null

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace('.', ',')
  }

  const handleAddToCart = () => {
    onAddToCart()
    onClose()
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
        <S.ModalContent>
          <S.ProductImage src={item.image} alt={item.name} />
          <S.ProductInfo>
            <S.ProductTitle>{item.name}</S.ProductTitle>
            <S.ProductDescription>{item.description}</S.ProductDescription>
            <S.ProductPortion>{item.portion}</S.ProductPortion>
            <S.AddButton onClick={handleAddToCart}>
              Adicionar ao carrinho - R$ {formatPrice(item.price)}
            </S.AddButton>
          </S.ProductInfo>
        </S.ModalContent>
      </S.Modal>
    </S.Overlay>
  )
}

export default ProductModal
