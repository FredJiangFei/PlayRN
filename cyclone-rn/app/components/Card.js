import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Image, Text } from 'react-native'
import colors from '../config/colors'

export default function Card({ desc, imageUrl, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: imageUrl }}/>

                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{desc}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: 200
    },

    detailsContainer: {
        padding: 20,
    },

    title: {
        marginBottom: 7,
    },

    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
})
