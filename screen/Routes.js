import React from 'react';
//------------------------------------

import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
//------------------------------------

import {
    Home,
    MyApp,
    Screen_01,
    Screen_02,
    Screen_03,
    Screen_04,
} from './Screens'

//------------------------------------

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
//------------------------------------

function ScreenRoute1() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Screen_01' component={Screen_01} />
        </Stack.Navigator>
    );
}
function ScreenRoute2() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Screen_02' component={Screen_02} />
        </Stack.Navigator>
    );
}
function ScreenRoute3() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Screen_03' component={Screen_03} />
        </Stack.Navigator>
    );
}
function ScreenRoute4() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Screen_04' component={Screen_04} />
        </Stack.Navigator>
    );
}
function MyAppRoutesDrawer() {
    return (
        <Drawer.Navigator>

            <Drawer.Screen name='MyApp' component={MyApp} />
            <Drawer.Screen name='Screen_01' component={ScreenRoute1} />
            <Drawer.Screen name='Screen_02' component={ScreenRoute2} />
            <Drawer.Screen name='Screen_03' component={ScreenRoute3} />
            <Drawer.Screen name='Screen_04' component={ScreenRoute4} />

        </Drawer.Navigator>
    );
}
export function HomeRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    );
}
export function MyAppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='MyApp' component={MyAppRoutesDrawer} />
        </Stack.Navigator>
    );
}