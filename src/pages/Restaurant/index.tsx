import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MenuList from '../../components/MenuList'
import Cart from '../../components/Cart'
import ProductModal from '../../components/ProductModal'
import Checkout from '../../components/Checkout'
import { MenuItem } from '../../types'
import * as S from './styles'

// Cardápios específicos para cada restaurante
const menusByRestaurant: { [key: number]: MenuItem[] } = {
  1: [ // Hioki Sushi
    {
      id: 101,
      name: 'Combinado Sushi 20 Peças',
      description: 'Seleção especial com 10 sushis e 10 sashimis. Salmão, atum, kani e peixe branco. Acompanha shoyu, gengibre e wasabi.',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop',
      portion: 'Serve 2 pessoas',
      price: 89.90,
    },
    {
      id: 102,
      name: 'Hot Roll Philadelphia',
      description: 'Hot roll empanado recheado com salmão e cream cheese, finalizado com molho especial. 8 unidades.',
      image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 42.90,
    },
    {
      id: 103,
      name: 'Temaki de Salmão',
      description: 'Cone de alga nori recheado com arroz, salmão fresco, pepino e cream cheese. Tamanho grande.',
      image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=300&h=200&fit=crop',
      portion: '1 unidade',
      price: 24.90,
    },
    {
      id: 104,
      name: 'Yakisoba Misto',
      description: 'Macarrão oriental salteado com legumes frescos, frango, carne e camarão. Molho especial.',
      image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&h=200&fit=crop',
      portion: 'Serve 2 pessoas',
      price: 54.90,
    },
    {
      id: 105,
      name: 'Sashimi Misto',
      description: 'Fatias generosas de salmão, atum e peixe branco. Total de 15 fatias. Fresco e de primeira qualidade.',
      image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=300&h=200&fit=crop',
      portion: 'Serve 1-2 pessoas',
      price: 67.90,
    },
    {
      id: 106,
      name: 'Uramaki Califórnia',
      description: 'Roll invertido com kani, pepino, manga e gergelim. 8 peças cortadas.',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop',
      portion: '8 peças',
      price: 35.90,
    },
  ],
  2: [ // La Dolce Vita Trattoria
    {
      id: 201,
      name: 'Pizza Margherita',
      description: 'A clássica Margherita: molho de tomate San Marzano, mussarela de búfala, manjericão fresco e azeite extravirgem.',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop',
      portion: 'Serve 2-3 pessoas',
      price: 62.90,
    },
    {
      id: 202,
      name: 'Pizza Quattro Formaggi',
      description: 'Deliciosa combinação de 4 queijos: mussarela, gorgonzola, parmesão e provolone. Massa artesanal.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop',
      portion: 'Serve 2-3 pessoas',
      price: 68.90,
    },
    {
      id: 203,
      name: 'Lasagna Bolognese',
      description: 'Lasanha tradicional com molho bolonhesa caseiro, camadas de massa fresca e muito queijo gratinado.',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=200&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 45.90,
    },
    {
      id: 204,
      name: 'Spaghetti Carbonara',
      description: 'Massa al dente com molho cremoso de ovos, pancetta crocante, queijo parmesão e pimenta do reino.',
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&h=200&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 42.90,
    },
    {
      id: 205,
      name: 'Risotto ai Funghi',
      description: 'Risoto cremoso com cogumelos frescos, vinho branco, manteiga e parmesão. Receita tradicional italiana.',
      image: 'https://images.unsplash.com/photo-1637806930600-37fa8892069d?w=300&h=200&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 48.90,
    },
    {
      id: 206,
      name: 'Pizza Pepperoni',
      description: 'Generosas fatias de pepperoni, mussarela derretida e orégano. A favorita dos americanos com toque italiano.',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop',
      portion: 'Serve 2-3 pessoas',
      price: 65.90,
    },
  ],
  3: [ // Burger House
    {
      id: 301,
      name: 'Classic Burger',
      description: 'Hambúrguer artesanal 180g, queijo cheddar, alface, tomate, cebola roxa e molho especial da casa.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop',
      portion: '1 hambúrguer',
      price: 32.90,
    },
    {
      id: 302,
      name: 'Bacon Supreme',
      description: 'Duplo hambúrguer, bacon crocante, cheddar, cebola caramelizada e molho barbecue defumado.',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=200&fit=crop',
      portion: '1 hambúrguer',
      price: 42.90,
    },
    {
      id: 303,
      name: 'Chicken Crispy',
      description: 'Frango empanado crocante, alface americana, picles, tomate e maionese artesanal.',
      image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=300&h=200&fit=crop',
      portion: '1 hambúrguer',
      price: 29.90,
    },
    {
      id: 304,
      name: 'Batata Frita Grande',
      description: 'Porção generosa de batatas fritas sequinhas e crocantes. Acompanha ketchup e maionese.',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop',
      portion: 'Serve 2 pessoas',
      price: 18.90,
    },
    {
      id: 305,
      name: 'Onion Rings',
      description: 'Anéis de cebola empanados super crocantes. 10 unidades. Perfeitos para compartilhar.',
      image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=300&h=200&fit=crop',
      portion: '10 unidades',
      price: 22.90,
    },
    {
      id: 306,
      name: 'Milkshake Chocolate',
      description: 'Milkshake cremoso de chocolate belga com chantilly e calda. 500ml.',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop',
      portion: '500ml',
      price: 16.90,
    },
  ],
  4: [ // El Mariachi Mexicano
    {
      id: 401,
      name: 'Tacos al Pastor',
      description: '3 tacos de porco marinado com abacaxi, coentro, cebola e molho picante. Autêntico sabor mexicano.',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&h=200&fit=crop',
      portion: '3 unidades',
      price: 34.90,
    },
    {
      id: 402,
      name: 'Burrito de Carne',
      description: 'Tortilla recheada com carne temperada, arroz, feijão, queijo, guacamole e sour cream.',
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop',
      portion: '1 burrito grande',
      price: 38.90,
    },
    {
      id: 403,
      name: 'Quesadilla de Frango',
      description: 'Tortilla grelhada recheada com frango desfiado e queijo derretido. Acompanha molhos.',
      image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=300&h=200&fit=crop',
      portion: 'Serve 1-2 pessoas',
      price: 32.90,
    },
    {
      id: 404,
      name: 'Nachos Supreme',
      description: 'Nachos crocantes com carne moída, queijo derretido, jalapeños, guacamole e sour cream.',
      image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=300&h=200&fit=crop',
      portion: 'Serve 2 pessoas',
      price: 42.90,
    },
    {
      id: 405,
      name: 'Enchiladas de Queijo',
      description: 'Tortillas recheadas com queijo, cobertas com molho de tomate picante e queijo gratinado.',
      image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=300&h=200&fit=crop',
      portion: '3 unidades',
      price: 36.90,
    },
    {
      id: 406,
      name: 'Guacamole com Chips',
      description: 'Guacamole fresco feito na hora com abacate, tomate, cebola e limão. Chips de tortilla crocantes.',
      image: '/guacamole.jpg',
      portion: 'Serve 2 pessoas',
      price: 24.90,
    },
  ],
  5: [ // Thai Spice Garden
    {
      id: 501,
      name: 'Pad Thai Tradicional',
      description: 'Macarrão de arroz salteado com camarão, ovo, amendoim, brotos e molho tamarindo. Clássico tailandês.',
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=300&h=200&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 44.90,
    },
    {
      id: 502,
      name: 'Green Curry com Frango',
      description: 'Curry verde aromático com frango, berinjela, pimentão e leite de coco. Servido com arroz jasmin.',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=300&h=200&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 42.90,
    },
    {
      id: 503,
      name: 'Tom Yum Kung',
      description: 'Sopa picante e azeda com camarões, capim-limão, galanga e cogumelos. Receita autêntica.',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 38.90,
    },
    {
      id: 504,
      name: 'Spring Rolls',
      description: 'Rolinhos primavera crocantes com legumes e camarão. 6 unidades com molho agridoce.',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=200&fit=crop',
      portion: '6 unidades',
      price: 28.90,
    },
    {
      id: 505,
      name: 'Massaman Curry',
      description: 'Curry suave com carne, batata, amendoim e especiarias. Menos picante, muito aromático.',
      image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=300&h=200&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 46.90,
    },
    {
      id: 506,
      name: 'Mango Sticky Rice',
      description: 'Sobremesa tradicional com arroz glutinoso, manga fresca e leite de coco adocicado.',
      image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=300&h=200&fit=crop',
      portion: '1 porção',
      price: 22.90,
    },
  ],
  6: [ // Churrascaria Gaúcha
    {
      id: 601,
      name: 'Picanha Nobre',
      description: 'Picanha premium grelhada no ponto, 400g. Acompanha farofa, vinagrete e arroz.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 78.90,
    },
    {
      id: 602,
      name: 'Costela no Bafo',
      description: 'Costela bovina assada lentamente por 6 horas. Macia e suculenta. 500g.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop',
      portion: 'Serve 1-2 pessoas',
      price: 68.90,
    },
    {
      id: 603,
      name: 'Linguiça Artesanal',
      description: 'Linguiça toscana artesanal grelhada. 4 gomos generosos. Sabor defumado inigualável.',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop',
      portion: '4 gomos',
      price: 34.90,
    },
    {
      id: 604,
      name: 'Mix de Carnes',
      description: 'Picanha, fraldinha, costela e linguiça. Perfeito para compartilhar. 800g de carne.',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=300&h=200&fit=crop',
      portion: 'Serve 2-3 pessoas',
      price: 124.90,
    },
    {
      id: 605,
      name: 'Coração de Frango',
      description: 'Espetinho de coração temperado e grelhado. 15 unidades. Tradição gaúcha.',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=300&h=200&fit=crop',
      portion: '15 unidades',
      price: 28.90,
    },
    {
      id: 606,
      name: 'Farofa Completa',
      description: 'Farofa crocante com bacon, calabresa, ovos, banana e cheiro verde. Porção generosa.',
      image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=300&h=200&fit=crop',
      portion: 'Serve 2 pessoas',
      price: 24.90,
    },
  ],
}

// Informações dos restaurantes
const restaurantInfo: { [key: number]: { name: string; category: string; image: string } } = {
  1: { name: 'Hioki Sushi', category: 'Japonesa', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&h=300&fit=crop' },
  2: { name: 'La Dolce Vita Trattoria', category: 'Italiana', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=300&fit=crop' },
  3: { name: 'Burger House', category: 'Americana', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=300&fit=crop' },
  4: { name: 'El Mariachi Mexicano', category: 'Mexicana', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200&h=300&fit=crop' },
  5: { name: 'Thai Spice Garden', category: 'Tailandesa', image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=1200&h=300&fit=crop' },
  6: { name: 'Churrascaria Gaúcha', category: 'Brasileira', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=300&fit=crop' },
}

const Restaurant = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  
  const restaurantId = Number(id) || 2
  const restaurant = restaurantInfo[restaurantId] || restaurantInfo[2]
  const mockMenu = menusByRestaurant[restaurantId] || menusByRestaurant[2]

  const handleAddToCart = (item: MenuItem) => {
    setSelectedProduct(item)
    setIsProductModalOpen(true)
  }

  const handleConfirmAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct)
    }
  }

  const handleContinueToCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  return (
    <>
      <Header variant="simple" onOpenCart={() => setIsCartOpen(true)} />
      <S.Banner style={{ backgroundImage: `url(${restaurant.image})` }}>
        <div className="container">
          <S.BannerContent>
            <S.Category>{restaurant.category}</S.Category>
            <S.Title>{restaurant.name}</S.Title>
          </S.BannerContent>
        </div>
      </S.Banner>
      <div className="container">
        <MenuList items={mockMenu} onAddToCart={handleAddToCart} />
      </div>
      <Footer />
      <ProductModal 
        isOpen={isProductModalOpen} 
        onClose={() => setIsProductModalOpen(false)}
        item={selectedProduct}
        onAddToCart={handleConfirmAddToCart}
      />
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        onContinueToCheckout={handleContinueToCheckout}
      />
      <Checkout 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  )
}

export default Restaurant
