import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style]}  >
                {children}

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // we use Constants from expo-constants for top padding in 
    // different platforms
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,//to fill the whole screen
        // backgroundColor: "blue"
    },
    view: {
        flex: 1,
        // backgroundColor: "red",
    },

})

export default Screen;
