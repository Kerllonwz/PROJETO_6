import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantList from '../../components/RestaurantList'
import { Restaurant } from '../../types'

// Mock data - em um projeto real, isso viria de uma API
const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    category: 'Japonesa',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=300&fit=crop',
    highlighted: true,
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop',
    highlighted: false,
  },
  {
    id: 3,
    title: 'Burguer House',
    category: 'Americana',
    rating: 4.8,
    description:
      'Os melhores hambúrgueres artesanais da cidade! Carnes premium, pães fresquinhos e ingredientes selecionados. Batatas crocantes e milkshakes cremosos. Sabor autêntico americano direto na sua porta!',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop',
    highlighted: false,
  },
  {
    id: 4,
    title: 'El Mariachi Mexicano',
    category: 'Mexicana',
    rating: 4.7,
    description:
      'Sabores autênticos do México! Tacos, burritos, quesadillas e nachos feitos com receitas tradicionais. Guacamole fresco, molhos picantes e carnes marinadas. Fiesta na sua casa!',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=300&fit=crop',
    highlighted: true,
  },
  {
    id: 5,
    title: 'Thai Spice Garden',
    category: 'Tailandesa',
    rating: 4.9,
    description:
      'Explore os sabores exóticos da Tailândia! Pad Thai autêntico, curries aromáticos e pratos picantes. Ingredientes frescos e especiarias importadas. Uma viagem gastronômica ao sudeste asiático!',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&h=300&fit=crop',
    highlighted: false,
  },
  {
    id: 6,
    title: 'Churrascaria Gaúcha',
    category: 'Brasileira',
    rating: 4.8,
    description:
      'O melhor churrasco brasileiro no conforto de casa! Carnes nobres, picanha suculenta e costela no bafo. Acompanhamentos tradicionais e farofa crocante. Tradição gaúcha com entrega rápida!',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=300&fit=crop',
    highlighted: false,
  },
]

const Home = () => {
  return (
    <>
      <Header variant="hero" />
      <div className="container">
        <RestaurantList restaurants={mockRestaurants} />
      </div>
      <Footer />
    </>
  )
}

export default Home
