import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
//------------------------------------

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C70039',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        color: '#ffffff',
        fontSize: 70,
        fontWeight: 'bold'
    }
})
//------------------------------------

function Screen_002() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                SCREEN_002
            </Text>
        </View>
    )
}

export default Screen_002
//------------------------------------------------------------------
