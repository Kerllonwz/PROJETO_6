export interface Restaurant {
  id: number
  title: string
  category: string
  rating: number
  description: string
  image: string
  highlighted: boolean
}

export interface MenuItem {
  id: number
  name: string
  description: string
  image: string
  portion: string
  price: number
}
