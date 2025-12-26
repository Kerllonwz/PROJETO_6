import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MenuList from '../../components/MenuList'
import Cart from '../../components/Cart'
import ProductModal from '../../components/ProductModal'
import Checkout from '../../components/Checkout'
import { MenuItem, Restaurant as RestaurantType } from '../../types'
import { fetchRestaurantById, fetchRestaurantMenu } from '../../services/api'
import * as S from './styles'

const Restaurant = () => {
  const { id } = useParams<{ id: string }>()
  const { addToCart } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null)
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRestaurantData = async () => {
      if (!id) return

      try {
        setLoading(true)
        const restaurantId = parseInt(id)
        
        // Buscar dados do restaurante e menu em paralelo
        const [restaurantData, menuData] = await Promise.all([
          fetchRestaurantById(restaurantId),
          fetchRestaurantMenu(restaurantId)
        ])

        setRestaurant(restaurantData || null)
        setMenuItems(menuData)
      } catch (error) {
        console.error('Erro ao carregar dados do restaurante:', error)
      } finally {
        setLoading(false)
      }
    }

    loadRestaurantData()
  }, [id])

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item)
  }

  const handleCloseModal = () => {
    setSelectedItem(null)
  }

  const handleAddToCart = () => {
    if (selectedItem) {
      addToCart(selectedItem)
    }
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const openCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  const closeCheckout = () => {
    setIsCheckoutOpen(false)
  }

  if (loading) {
    return (
      <>
        <Header variant="simple" onCartClick={toggleCart} />
        <div className="container">
          <p style={{ textAlign: 'center', padding: '40px 0' }}>Carregando cardápio...</p>
        </div>
        <Footer />
      </>
    )
  }

  if (!restaurant) {
    return (
      <>
        <Header variant="simple" onCartClick={toggleCart} />
        <div className="container">
          <p style={{ textAlign: 'center', padding: '40px 0' }}>Restaurante não encontrado.</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header variant="simple" onCartClick={toggleCart} />
      <S.Banner style={{ backgroundImage: `url(${restaurant.image})` }}>
        <div className="container">
          <S.RestaurantInfo>
            <S.Category>{restaurant.category}</S.Category>
            <S.Title>{restaurant.title}</S.Title>
          </S.RestaurantInfo>
        </div>
      </S.Banner>
      <div className="container">
        <MenuList items={menuItems} onItemClick={handleItemClick} />
      </div>
      <Footer />
      <Cart isOpen={isCartOpen} onClose={toggleCart} onCheckout={openCheckout} />
      <ProductModal
        isOpen={selectedItem !== null}
        onClose={handleCloseModal}
        item={selectedItem}
        onAddToCart={handleAddToCart}
      />
      <Checkout isOpen={isCheckoutOpen} onClose={closeCheckout} />
    </>
  )
}

export default Restaurant
