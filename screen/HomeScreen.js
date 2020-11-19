import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
//------------------------------------

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC300',
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

function HomeScreen({ navigation }) {
    return (

        <View style={styles.container}>

            <Text style={styles.title}>HOME</Text>

            <Button
                title="vai all'altra pagina"
                onPress={() => navigation.push("Details")}/>

        </View>
    );
}

export default HomeScreen
//------------------------------------------------------------------
