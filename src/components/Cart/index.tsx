import { useCart } from '../../context/CartContext'
import * as S from './styles'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const Cart = ({ isOpen, onClose }: Props) => {
  const { items, removeFromCart, getTotalPrice } = useCart()

  if (!isOpen) return null

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace('.', ',')
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.Sidebar onClick={(e) => e.stopPropagation()}>
        {items.length === 0 ? (
          <S.EmptyCart>
            O carrinho está vazio. Adicione produtos para continuar!
          </S.EmptyCart>
        ) : (
          <>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <S.CartImage src={item.image} alt={item.name} />
                <S.CartItemInfo>
                  <S.CartItemTitle>{item.name}</S.CartItemTitle>
                  <S.CartItemPrice>R$ {formatPrice(item.price)}</S.CartItemPrice>
                  {item.quantity > 1 && (
                    <S.CartItemPrice>Quantidade: {item.quantity}</S.CartItemPrice>
                  )}
                </S.CartItemInfo>
                <S.RemoveButton onClick={() => removeFromCart(item.id)}>
                  Remover
                </S.RemoveButton>
              </S.CartItem>
            ))}
            
            <S.TotalPrice>
              <span>Valor total</span>
              <span>R$ {formatPrice(getTotalPrice())}</span>
            </S.TotalPrice>
            
            <S.CheckoutButton>
              Continuar com a entrega
            </S.CheckoutButton>
          </>
        )}
      </S.Sidebar>
    </S.Overlay>
  )
}

export default Cart
