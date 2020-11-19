import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
//------------------------------------

import UserList from './components/UserList'
//------------------------------------

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#24221C',

        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',

    },
    title__container: {

        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        color: '#ffffff',
        fontSize: 50,
        fontWeight: 'bold',
    },
    list__container: {

        flex: 0.85,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
//------------------------------------

function Screen_001() {
    return (
        <View style={styles.container}>
            <View style={styles.title__container}>
                <Text style={styles.title}>
                    SCREEN_001
            </Text>
            </View>

            <View style={styles.list__container}>
                <UserList />

            </View>

        </View>
    )
}

export default Screen_001
//------------------------------------------------------------------
