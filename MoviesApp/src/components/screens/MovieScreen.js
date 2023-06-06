import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieList from '../lists/MovieList';

const MovieScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movieData, setMovieData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjhhM2Y0MWQ3NDgyNTAyYzM2YjA5MWRmMDJlMDYxMiIsInN1YiI6IjYyZWI0ZGYyODU2NmQyMDA2Mjc2ZmMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-sSeSSkC-rso-IiQwi_obj3b_hL7CgoErNQ9xvRJNFU'
        }
    };

    const imagePath = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        fetchMovies();
    }, [])

    const fetchMovies = () => {
        setIsLoading(true);

        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {
                //console.log(response);
                let data = response.results.map(item => ({ id: item.id, title: item.title, releasedate: item.release_date, popularity: item.popularity, image: imagePath + item.poster_path }));
                setMovieData(data);
                //console.log(data);
            })
            .catch(err => console.error(err));

        setIsLoading(false);

    }

    return (
        <>
            <Text>Open up App.js to start working on your app!</Text>
            {!isLoading && <MovieList movies={movieData} />}
            <StatusBar style="auto" />
        </>
    );
}

export default MovieScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
