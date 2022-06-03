import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Image, Text } from 'react-native'

export default function Card({ desc, imageUrl, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={()=>onPress(desc)}>
            <View>
                <Image style={styles.image} source={{ uri: imageUrl }}/>
                <Text>{desc}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    }
})
