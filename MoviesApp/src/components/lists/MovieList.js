import { FlatList } from 'native-base'
import MovieCard from '../listItems/MovieCard'

const MovieList = props => {
  const { movies } = props
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieCard
          label={item.title}
        />
      )}
    />
  )
}

export default MovieList
