import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'
import MovieList from '../lists/MovieList';
import { Picker } from '@react-native-picker/picker';


const SEARCH_FILTER = {
    movie : "movie",
    multi : "multi"
}

const SearchScreen = ({ navigation }) => {
    const [searchText, setSearchText] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);
    const [movieData, setMovieData] = React.useState([]);
    const [filter, setFilter] = React.useState(SEARCH_FILTER.movie);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGEzMDlkMjBiN2QyMTkyMjBmNTczNTNhMjMyZWE5MiIsInN1YiI6IjYyZWI0ZGYyODU2NmQyMDA2Mjc2ZmMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.knOvpRGUiC40-YOGMcgWhBYiKxTw1a_aOTlkc6H2LTA'
          }
    };

    const imagePath = "https://image.tmdb.org/t/p/original/";

    React.useEffect(() => {
        fetchMovies();
    }, [filter])

    const fetchMovies = () => {

        const queryURL = 'https://api.themoviedb.org/3/search/' + filter + "?query=" + encodeURIComponent(searchText);
        console.log(queryURL)
        fetch(queryURL, options)
            .then(response => response.json())
            .then(response => {
                //console.log(response);
                let data = response.results.map(item => ({ id: item.id, title: item.title, releasedate: item.release_date, popularity: item.popularity, image: imagePath + item.poster_path }));
                setMovieData(data);
                setIsLoading(false);
                //console.log(data);
            })
            .catch(err => console.error(err));

    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setSearchText}
                value={searchText}
                placeholder='i.e James Bond'
            />
            <Button
                onPress={fetchMovies}
                title='Search'
            >
                Search
            </Button>
            <Picker
                selectedValue={filter}
                mode='dialog'
                onValueChange={(itemValue, itemIndex) =>
                    setFilter(itemValue)
                }>
                <Picker.Item label="Movies" value={SEARCH_FILTER.movie} />
                <Picker.Item label="Multi" value={SEARCH_FILTER.multi} />
            </Picker>
            {!isLoading && <MovieList movies={movieData} navigation={navigation} />}
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});