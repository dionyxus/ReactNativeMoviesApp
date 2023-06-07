import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieScreen from '../screens/MovieScreen';
import DetailScreen from '../screens/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';

const MovieStack = createNativeStackNavigator();

const MovieStackScreen = () => {
    return (
        <MovieStack.Navigator>
            <MovieStack.Screen name="Movie" component={MovieScreen} options={{ headerShown: false }}/>
            <MovieStack.Screen name="Details" component={DetailScreen}/>
        </MovieStack.Navigator>
    );
}

export default MovieStackScreen;