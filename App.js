import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cards from "./components/Cards"
import Bookmarks from "./components/Bookmarks"

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Cards" component={Cards} />
                <Stack.Screen name="Bookmarks" component={Bookmarks} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
