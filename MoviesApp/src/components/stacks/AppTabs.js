import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TVShowScreen from '../screens/TVShowScreen';
import { NavigationContainer } from '@react-navigation/native';
import MovieStackScreen from './MovieStackScreen';

const Tab = createMaterialTopTabNavigator();

const AppTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Movies" component={MovieStackScreen} />
                <Tab.Screen name="TV Shows" component={TVShowScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppTabs