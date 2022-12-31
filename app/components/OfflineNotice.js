import { StyleSheet, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

import AppText from './AppText';
import colors from '../config/colors';

const OfflineNotice = () => {
    const netInfo = useNetInfo();
    // console.log(netInfo)
    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connection</AppText>
            </View>
        )
    return null
}

export default OfflineNotice

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        height: 50,
        position: "absolute",
        zIndex: 1,
        width: "100%",
        top: Constants.statusBarHeight,

    },
    text: {
        color: colors.white,
    }

})