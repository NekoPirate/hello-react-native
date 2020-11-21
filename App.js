import React from 'react';
//------------------------------------

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//------------------------------------

import {
  HomeRoutes,
  MyAppRoutes,
} from './screen/Routes'
//------------------------------------

const Tab = createBottomTabNavigator()
//------------------------------------

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name="Home" component={HomeRoutes} />
        <Tab.Screen name='MyApp' component={MyAppRoutes} options={{ title: 'LE MIE APPLICAZIONI' }} />

      </Tab.Navigator>
    </NavigationContainer >
  );
}
export default App