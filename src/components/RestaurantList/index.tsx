import { Restaurant } from '../../types'
import RestaurantCard from '../RestaurantCard'
import * as S from './styles'

interface Props {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <S.List>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </S.List>
  )
}

export default RestaurantList
