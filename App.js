import React from 'react'
//------------------------------------

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//------------------------------------

import HomeScreen from './screen/HomeScreen.js'
import DetailsScreen from './screen/DetailsScreen.js'
//------------------------------------

const Stack = createStackNavigator();
//------------------------------------

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "HOME" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "DETAILS" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
//------------------------------------------------------------------
