import { Restaurant, MenuItem } from '../types'

// Simulação de API com dados mockados
const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    category: 'Japonesa',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=300&fit=crop',
    highlighted: true,
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop',
    highlighted: false,
  },
  {
    id: 3,
    title: 'Burguer House',
    category: 'Hamburguer',
    rating: 4.8,
    description:
      'Os melhores hambúrgueres artesanais da cidade! Carne 100% premium, pães fresquinhos e ingredientes selecionados. Peça agora e saboreie a perfeição em cada mordida!',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop',
    highlighted: true,
  },
  {
    id: 4,
    title: 'Thai Spice',
    category: 'Tailandesa',
    rating: 4.7,
    description:
      'Descubra os sabores exóticos da Tailândia! Pratos autênticos, temperos especiais e ingredientes frescos. Entrega rápida para você viajar pela Ásia sem sair de casa.',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&h=300&fit=crop',
    highlighted: false,
  },
  {
    id: 5,
    title: 'Taco Mexicano',
    category: 'Mexicana',
    rating: 4.5,
    description:
      'Sabores autênticos do México! Tacos crocantes, burritos generosos, quesadillas deliciosas e muito mais. Ingredientes frescos e receitas tradicionais.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=300&fit=crop',
    highlighted: false,
  },
  {
    id: 6,
    title: 'Pizza Napolitana',
    category: 'Italiana',
    rating: 4.9,
    description:
      'A verdadeira pizza napolitana! Massa artesanal fermentada por 48h, molho de tomates San Marzano e mozzarella de búfala. Um pedaço da Itália na sua casa.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop',
    highlighted: true,
  },
]

interface MenuData {
  [key: number]: MenuItem[]
}

const mockMenus: MenuData = {
  1: [
    {
      id: 101,
      name: 'Sushi Combo Premium',
      description:
        '16 peças variadas de sushi e sashimi, incluindo salmão, atum, peixe branco e camarão. Acompanha molho shoyu, wasabi e gengibre.',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
      portion: 'Serve 2 pessoas',
      price: 89.9,
    },
    {
      id: 102,
      name: 'Temaki de Salmão',
      description:
        'Cone de alga nori recheado com arroz japonês, salmão fresco, cream cheese e cebolinha. Crocante e delicioso!',
      image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop',
      portion: '1 unidade',
      price: 24.9,
    },
    {
      id: 103,
      name: 'Hot Roll Philadelphia',
      description:
        '8 peças de hot roll empanado, recheado com salmão e cream cheese, coberto com molho especial da casa.',
      image: 'https://images.unsplash.com/photo-1617196035722-a4e878b14a95?w=400&h=300&fit=crop',
      portion: '8 peças',
      price: 42.9,
    },
  ],
  2: [
    {
      id: 201,
      name: 'Spaghetti Carbonara',
      description:
        'Massa fresca ao molho carbonara tradicional, com bacon crocante, ovos, parmesão e pimenta do reino.',
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 45.9,
    },
    {
      id: 202,
      name: 'Pizza Margherita',
      description:
        'Pizza clássica com molho de tomate caseiro, mozzarella de búfala, manjericão fresco e azeite extravirgem.',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
      portion: '8 fatias',
      price: 52.9,
    },
    {
      id: 203,
      name: 'Lasanha Bolonhesa',
      description:
        'Camadas de massa fresca intercaladas com molho bolonhesa, bechamel e queijos gratinados.',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
      portion: 'Serve 2 pessoas',
      price: 58.9,
    },
  ],
  3: [
    {
      id: 301,
      name: 'Smash Burger Duplo',
      description:
        'Dois hambúrgueres smash de 120g cada, queijo cheddar, cebola caramelizada, picles e molho especial da casa em pão brioche.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 38.9,
    },
    {
      id: 302,
      name: 'Bacon Cheese Burger',
      description:
        'Hambúrguer de 180g, queijo cheddar, bacon crocante, alface, tomate e maionese artesanal.',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 35.9,
    },
    {
      id: 303,
      name: 'Batata Frita Premium',
      description:
        'Batatas fritas crocantes por fora e macias por dentro, temperadas com sal especial e ervas.',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
      portion: 'Serve 2 pessoas',
      price: 18.9,
    },
  ],
  4: [
    {
      id: 401,
      name: 'Pad Thai',
      description:
        'Macarrão de arroz salteado com camarões, amendoim, brotos de feijão, ovos e molho tamarindo.',
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 42.9,
    },
    {
      id: 402,
      name: 'Tom Yum Goong',
      description:
        'Sopa tailandesa picante e azeda com camarões, cogumelos, capim-limão, galanga e folhas de limão kaffir.',
      image: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=400&h=300&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 38.9,
    },
    {
      id: 403,
      name: 'Curry Verde',
      description:
        'Curry tailandês verde com frango, berinjela, pimentões, leite de coco e manjericão tailandês.',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 44.9,
    },
  ],
  5: [
    {
      id: 501,
      name: 'Tacos de Carnitas',
      description:
        '3 tacos de porco desfiado com cebola, coentro, abacaxi grelhado e molho chipotle.',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
      portion: '3 unidades',
      price: 32.9,
    },
    {
      id: 502,
      name: 'Burrito de Carne Asada',
      description:
        'Burrito recheado com carne grelhada, arroz, feijão, queijo, guacamole, creme azedo e pico de gallo.',
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 39.9,
    },
    {
      id: 503,
      name: 'Nachos Supreme',
      description:
        'Tortilhas crocantes com queijo derretido, carne moída, jalapeños, guacamole, creme azedo e salsa.',
      image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400&h=300&fit=crop',
      portion: 'Serve 2 pessoas',
      price: 36.9,
    },
  ],
  6: [
    {
      id: 601,
      name: 'Pizza Margherita DOP',
      description:
        'Pizza napolitana autêntica com molho de tomate San Marzano DOP, mozzarella di Bufala Campana DOP, manjericão fresco e azeite.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
      portion: '6 fatias',
      price: 68.9,
    },
    {
      id: 602,
      name: 'Pizza Diavola',
      description:
        'Pizza com molho de tomate, mozzarella, salame picante calabrês e azeite com pimenta.',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
      portion: '6 fatias',
      price: 72.9,
    },
    {
      id: 603,
      name: 'Calzone Napoletano',
      description:
        'Calzone recheado com ricota, mozzarella, salame napolitano e molho de tomate.',
      image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?w=400&h=300&fit=crop',
      portion: 'Serve 1 pessoa',
      price: 48.9,
    },
  ],
}

// Função auxiliar para simular delay de rede
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// API simulada com Promise (AJAX-like)
export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  await delay(500) // Simula latência de rede
  return mockRestaurants
}

export const fetchRestaurantById = async (id: number): Promise<Restaurant | undefined> => {
  await delay(300)
  return mockRestaurants.find((r) => r.id === id)
}

export const fetchRestaurantMenu = async (restaurantId: number): Promise<MenuItem[]> => {
  await delay(400)
  return mockMenus[restaurantId] || []
}
