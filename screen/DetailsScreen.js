import React from 'react'
//------------------------------------

import { createDrawerNavigator } from '@react-navigation/drawer'
//------------------------------------

import Screen_001 from './Screen_001.js'
import Screen_002 from './Screen_002.js'
import Screen_003 from './Screen_003.js'
//------------------------------------

const Drawer = createDrawerNavigator();
//------------------------------------

function DetailsScreen({ navigation }) {
  return (
    <Drawer.Navigator>

      <Drawer.Screen name="Screen_001" component={Screen_001} />
      <Drawer.Screen name="Screen_002" component={Screen_002} />
      <Drawer.Screen name="Screen_003" component={Screen_003} />

    </Drawer.Navigator>
  );
}

export default DetailsScreen
//------------------------------------------------------------------
