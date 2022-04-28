import React from 'react'
import { StyleSheet } from 'react-native'
import { H3 } from '../components/Typography'

export default function ElTitle({ children }) {
    return (
        <H3 style={styles.title}>{children}</H3>
    ) 
}

const styles = StyleSheet.create({
    title: {
        marginTop: 32,
        marginBottom: 16,
        textAlign: 'center'
    }
})
