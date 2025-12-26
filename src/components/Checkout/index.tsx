import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import * as S from './styles'

interface Props {
  isOpen: boolean
  onClose: () => void
}

type CheckoutStep = 'delivery' | 'payment' | 'confirmation'

interface DeliveryData {
  receiver: string
  address: string
  city: string
  cep: string
  number: string
  complement: string
}

interface PaymentData {
  cardName: string
  cardNumber: string
  cvv: string
  expiryMonth: string
  expiryYear: string
}

const Checkout = ({ isOpen, onClose }: Props) => {
  const { getTotalPrice, clearCart } = useCart()
  const [step, setStep] = useState<CheckoutStep>('delivery')
  const [orderId, setOrderId] = useState('')
  
  const [deliveryData, setDeliveryData] = useState<DeliveryData>({
    receiver: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: '',
  })

  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardName: '',
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: '',
  })

  if (!isOpen) return null

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace('.', ',')
  }

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Gerar número do pedido (em produção viria do backend)
    const generatedOrderId = Math.random().toString(36).substring(2, 9).toUpperCase()
    setOrderId(generatedOrderId)
    setStep('confirmation')
  }

  const handleFinish = () => {
    clearCart()
    setStep('delivery')
    setDeliveryData({
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
    })
    setPaymentData({
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiryMonth: '',
      expiryYear: '',
    })
    onClose()
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.Sidebar onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        {step === 'delivery' && (
          <>
            <S.Title>Entrega</S.Title>
            <S.Form onSubmit={handleDeliverySubmit}>
              <S.InputGroup>
                <S.Label>Quem irá receber</S.Label>
                <S.Input
                  type="text"
                  value={deliveryData.receiver}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeliveryData({ ...deliveryData, receiver: e.target.value })}
                  required
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label>Endereço</S.Label>
                <S.Input
                  type="text"
                  value={deliveryData.address}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeliveryData({ ...deliveryData, address: e.target.value })}
                  required
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label>Cidade</S.Label>
                <S.Input
                  type="text"
                  value={deliveryData.city}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeliveryData({ ...deliveryData, city: e.target.value })}
                  required
                />
              </S.InputGroup>

              <S.InputRow>
                <S.InputGroup>
                  <S.Label>CEP</S.Label>
                  <S.Input
                    type="text"
                    value={deliveryData.cep}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeliveryData({ ...deliveryData, cep: e.target.value })}
                    maxLength={9}
                    required
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <S.Label>Número</S.Label>
                  <S.Input
                    type="text"
                    value={deliveryData.number}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeliveryData({ ...deliveryData, number: e.target.value })}
                    required
                  />
                </S.InputGroup>
              </S.InputRow>

              <S.InputGroup>
                <S.Label>Complemento (opcional)</S.Label>
                <S.Input
                  type="text"
                  value={deliveryData.complement}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeliveryData({ ...deliveryData, complement: e.target.value })}
                />
              </S.InputGroup>

              <S.Button type="submit">Continuar com o pagamento</S.Button>
              <S.BackButton type="button" onClick={onClose}>
                Voltar para o carrinho
              </S.BackButton>
            </S.Form>
          </>
        )}

        {step === 'payment' && (
          <>
            <S.Title>
              Pagamento - Valor a pagar R$ {formatPrice(getTotalPrice())}
            </S.Title>
            <S.Form onSubmit={handlePaymentSubmit}>
              <S.InputGroup>
                <S.Label>Nome no cartão</S.Label>
                <S.Input
                  type="text"
                  value={paymentData.cardName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentData({ ...paymentData, cardName: e.target.value })}
                  required
                />
              </S.InputGroup>

              <S.InputRow>
                <S.InputGroup style={{ flex: 2 }}>
                  <S.Label>Número do cartão</S.Label>
                  <S.Input
                    type="text"
                    value={paymentData.cardNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                    maxLength={19}
                    required
                  />
                </S.InputGroup>

                <S.InputGroup style={{ flex: 1 }}>
                  <S.Label>CVV</S.Label>
                  <S.Input
                    type="text"
                    value={paymentData.cvv}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                    maxLength={3}
                    required
                  />
                </S.InputGroup>
              </S.InputRow>

              <S.InputRow>
                <S.InputGroup>
                  <S.Label>Mês de vencimento</S.Label>
                  <S.Input
                    type="text"
                    value={paymentData.expiryMonth}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentData({ ...paymentData, expiryMonth: e.target.value })}
                    placeholder="MM"
                    maxLength={2}
                    required
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <S.Label>Ano de vencimento</S.Label>
                  <S.Input
                    type="text"
                    value={paymentData.expiryYear}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentData({ ...paymentData, expiryYear: e.target.value })}
                    placeholder="AAAA"
                    maxLength={4}
                    required
                  />
                </S.InputGroup>
              </S.InputRow>

              <S.Button type="submit">Finalizar pagamento</S.Button>
              <S.BackButton type="button" onClick={() => setStep('delivery')}>
                Voltar para a edição de endereço
              </S.BackButton>
            </S.Form>
          </>
        )}

        {step === 'confirmation' && (
          <>
            <S.Title>Pedido realizado - {orderId}</S.Title>
            <S.ConfirmationText>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
              <br /><br />
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
              <br /><br />
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
              <br /><br />
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </S.ConfirmationText>
            <S.Button onClick={handleFinish}>Concluir</S.Button>
          </>
        )}
      </S.Sidebar>
    </S.Overlay>
  )
}

export default Checkout
