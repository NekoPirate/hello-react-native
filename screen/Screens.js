import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
//------------------------------------

import UserList from '../components/UserList'
//------------------------------------

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 100,
        fontWeight: 'bold',
    },
    splash: {
        backgroundColor: '#FFC300',

    },
    login: {
        backgroundColor: '#2980B9',

    },
    home: {
        backgroundColor: '#884EA0',

    },
    myApp: {
        backgroundColor: '#95A5A6',

    },
    screen__01: {
        backgroundColor: '#333444',

    },
    screen__02: {
        backgroundColor: '#DAF7A6',

    },
    screen__03: {
        backgroundColor: '#900C3F',

    },
    screen__04: {
        backgroundColor: '#FF5733',

    },
});

//------------------------------------HOME

export function Home({ navigation }) {
    return (
        <View style={[
            styles.container,
            styles.home]}>

            <Text style={
                styles.title}>

                HOME
            </Text>
        </View>
    )
}
//------------------------------------MyApp

export function MyApp({ navigation }) {
    return (
        <View style={[
            styles.container,
            styles.myApp]}>

            <Text style={
                styles.title}
                onPress={() => navigation.toggleDrawer()}>

                MyApp
            </Text>

            <Button title='go to home' onPress={() => navigation.navigate('Home')} />
        </View>
    )
}
//------------------------------------SCREEN_01

export function Screen_01({ navigation }) {
    return (
        <View style={[
            styles.container,
            styles.screen__01]}>

            <UserList />
        </View>
    )
}
//------------------------------------SCREEN_02

export function Screen_02({ navigation }) {
    return (
        <View style={[
            styles.container,
            styles.screen__02]}>

            <Text style={
                styles.title}
                onPress={() => navigation.toggleDrawer()}>

                2
            </Text>
        </View>
    )
}
//------------------------------------SCREEN_03

export function Screen_03({ navigation }) {
    return (
        <View style={[
            styles.container,
            styles.screen__03]}>

            <Text style={
                styles.title}
                onPress={() => navigation.toggleDrawer()}>

                3
            </Text>
        </View>
    )
}
//------------------------------------SCREEN_04

export function Screen_04({ navigation }) {
    return (
        <View style={[
            styles.container,
            styles.screen__04]}>

            <Text style={
                styles.title}
                onPress={() => navigation.toggleDrawer()}>

                4
            </Text>
        </View>
    )
}
//------------------------------------------------------------------------
