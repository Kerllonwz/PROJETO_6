import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantList from '../../components/RestaurantList'
import { Restaurant } from '../../types'
import { fetchRestaurants } from '../../services/api'
const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        setLoading(true)
        const data = await fetchRestaurants()
        setRestaurants(data)
      } catch (error) {
        console.error('Erro ao carregar restaurantes:', error)
      } finally {
        setLoading(false)
      }
    }

    loadRestaurants()
  }, [])

  if (loading) {
    return (
      <>
        <Header variant="hero" />
        <div className="container">
          <p style={{ textAlign: 'center', padding: '40px 0' }}>Carregando restaurantes...</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header variant="hero" />
      <div className="container">
        <RestaurantList restaurants={restaurants} />
      </div>
      <Footer />
    </>
  )
}

export default Home
