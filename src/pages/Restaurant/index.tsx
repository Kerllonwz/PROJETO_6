import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MenuList from '../../components/MenuList'
import Cart from '../../components/Cart'
import { MenuItem } from '../../types'
import * as S from './styles'

// Mock data - em um projeto real, isso viria de uma API
const mockMenu: MenuItem[] = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop',
    portion: 'Serve de 2 a 3 pessoas',
    price: 60.9,
  },
  {
    id: 2,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop',
    portion: 'Serve de 2 a 3 pessoas',
    price: 60.9,
  },
  {
    id: 3,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop',
    portion: 'Serve de 2 a 3 pessoas',
    price: 60.9,
  },
  {
    id: 4,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop',
    portion: 'Serve de 2 a 3 pessoas',
    price: 60.9,
  },
  {
    id: 5,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop',
    portion: 'Serve de 2 a 3 pessoas',
    price: 60.9,
  },
  {
    id: 6,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop',
    portion: 'Serve de 2 a 3 pessoas',
    price: 60.9,
  },
]

const Restaurant = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  console.log('ID do restaurante:', id)

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item)
  }

  return (
    <>
      <Header variant="simple" onOpenCart={() => setIsCartOpen(true)} />
      <S.Banner style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=300&fit=crop)' }}>
        <div className="container">
          <S.BannerContent>
            <S.Category>Italiana</S.Category>
            <S.Title>La Dolce Vita Trattoria</S.Title>
          </S.BannerContent>
        </div>
      </S.Banner>
      <div className="container">
        <MenuList items={mockMenu} onAddToCart={handleAddToCart} />
      </div>
      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default Restaurant
