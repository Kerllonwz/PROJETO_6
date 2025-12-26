import { useCart } from '../../context/CartContext'
import * as S from './styles'

interface Props {
  isOpen: boolean
  onClose: () => void
  onContinueToCheckout?: () => void
}

const Cart = ({ isOpen, onClose, onContinueToCheckout }: Props) => {
  const { items, removeFromCart, getTotalPrice } = useCart()

  if (!isOpen) return null

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace('.', ',')
  }

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Adicione itens ao carrinho antes de continuar!')
      return
    }
    
    if (onContinueToCheckout) {
      onContinueToCheckout()
    } else {
      const total = getTotalPrice()
      const itemsList = items
        .map((item) => `${item.quantity}x ${item.name} - R$ ${formatPrice(item.price * item.quantity)}`)
        .join('\n')
      
      alert(
        `Pedido finalizado!\n\n` +
        `Itens:\n${itemsList}\n\n` +
        `Total: R$ ${formatPrice(total)}\n\n` +
        `Em breve você será redirecionado para a página de entrega.`
      )
    }
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
            
            <S.CheckoutButton onClick={handleCheckout}>
              Continuar com a entrega
            </S.CheckoutButton>
          </>
        )}
      </S.Sidebar>
    </S.Overlay>
  )
}

export default Cart
