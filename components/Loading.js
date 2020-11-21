import React from 'react'
import { Animated, StyleSheet } from 'react-native'
//------------------------------------

const styles = StyleSheet.create({
    loading: {
        borderRadius: 50,
        borderBottomColor: '#2B1100',
        borderLeftColor: '#2B1100',
        borderTopColor: '#ce3a26',
        borderRightColor: '#ce3a26',
        borderWidth: 10,

        width: 100,
        height: 100,

        marginBottom: 100
    }
})
//------------------------------------

function Loading() {
    return <Animated.View style={styles.loading} />
}

export default Loading;
//------------------------------------------------------------------
