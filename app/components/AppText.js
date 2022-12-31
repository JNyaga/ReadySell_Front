import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'

import colors from '../config/colors'
import defaultStlyes from './../config/styles';

export default function AppText({ children, style, ...otherProps }) {
    return (
        <Text style={[defaultStlyes.text, style]} {...otherProps} >{children}</Text>
    )
}

const styles = StyleSheet.create({
    // text: {
    //     fontSize: 18,
    //     fontWeight: '100',
    //     fontStyle: "normal",
    //     // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    //     ...Platform.select({
    //         ios: {
    //             fontSize: 20,
    //             fontFamily: "Avenir"
    //         },
    //         android: {
    //             fontSize: 18,
    //             fontFamily: "Roboto",
    //         }
    //     }),
    // },
})


