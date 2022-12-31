import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Image } from 'react-native-expo-image-cache'

import colors from '../config/colors'
import AppText from './AppText'

export default function Card({ title, subtitle, imageUrl, onPress, thumbnailUrl }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                {/* resizeMode is used to contain the image withi a given area */}
                {/* <Image resizeMode='cover' source={{ uri: imageUrl }} style={styles.image} />react native image */}
                <Image
                    resizeMode='cover'
                    preview={{ uri: thumbnailUrl }}
                    uri={imageUrl}
                    style={styles.image}
                    tint="light"
                />
                {/* <View style={styles.imageView}>

            </View> */}
                <View style={styles.detailContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subtitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
    },
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 200,
        // flex: 1,
    },
    imageView: {
        width: "100%",
        height: 200,
    },
    subTitle: {
        color: colors.secondary
    },
    title: {
        marginBottom: 20,
    }
})