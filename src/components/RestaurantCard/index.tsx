import { Link } from 'react-router-dom'
import { Restaurant } from '../../types'
import * as S from './styles'

interface Props {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <S.Card>
      <S.ImageContainer>
        <img src={restaurant.image} alt={restaurant.title} />
        <S.Tags>
          {restaurant.highlighted && <S.Tag>Destaque da semana</S.Tag>}
          <S.Tag>{restaurant.category}</S.Tag>
        </S.Tags>
      </S.ImageContainer>
      <S.Content>
        <S.TitleRow>
          <S.Title>{restaurant.title}</S.Title>
          <S.Rating>
            {restaurant.rating}
            <span>⭐</span>
          </S.Rating>
        </S.TitleRow>
        <S.Description>{restaurant.description}</S.Description>
        <Link to={`/restaurante/${restaurant.id}`}>
          <S.Button>Saiba mais</S.Button>
        </Link>
      </S.Content>
    </S.Card>
  )
}

export default RestaurantCard
