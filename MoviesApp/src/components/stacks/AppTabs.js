import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieScreen from '../screens/MovieScreen';
import TVShowScreen from '../screens/TVShowScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const AppTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Movies" component={MovieScreen} />
                <Tab.Screen name="TV Shows" component={TVShowScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppTabs