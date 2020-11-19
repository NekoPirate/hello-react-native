import React, { useState, useEffect } from 'react'
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native'
//------------------------------------

import Loading from './Loading'
//------------------------------------

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: '#484537',
        minHeight: 85,
        paddingRight: 30,
        paddingLeft: 15,
        marginVertical: 5,
    },
    card__avatar: {
        backgroundColor: '#24221C',
        borderRadius: 50,
        width: 64,
        height: 64,
        overflow: 'hidden',
    },
    card__avatar__img: {
        width: 64,
        height: 64,
    },
    card__data: {
        color: '#E3E2DB',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
//------------------------------------

function UserList() {
    const [userData, setUserData] = useState([])

    function getData() {
        fetch("https://myfakeapi.com/api/users")
            .then(responce => responce.json())
            .then(data => setUserData(data.Users))
    }
    useEffect(getData, [])

    if (userData < 1) {
        return <Loading />
    } else {
        return <>
            <ScrollView>
                {userData.map(utente => <UserCard key={utente.id} data={utente} />)}
            </ScrollView>
        </>
    }
}

export function UserCard(props) {
    const { first_name, last_name, avatar } = props.data;
    return (
        <View style={styles.card}>

            <View style={styles.card__avatar}>
                <Image
                    style={styles.card__avatar__img}
                    source={{ uri: avatar }} />
            </View>

            <Text style={styles.card__data}>
                {first_name} {last_name}
            </Text>

        </View>
    )
}

export default UserList;
//------------------------------------------------------------------
