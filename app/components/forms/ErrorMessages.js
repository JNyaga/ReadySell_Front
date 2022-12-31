import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppText from '../AppText'

const ErrorMessages = ({ error, visible }) => {
    if (!visible || !error) return null
    return (
        <AppText style={styles.error}>{error}</AppText>
    )
}

export default ErrorMessages

const styles = StyleSheet.create({
    error: {
        color: "red",
    },
})