import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import routes from '../navigation/routes';



function WelcomeScreen({ navigation, style }) {
    return (
        <ImageBackground blurRadius={2} style={[styles.background, style]} source={require('../assets/background.jpg')} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/R_logo_red.png")} />
                <Text style={styles.tagLine}>sell what you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
                <AppButton title={"Register"} color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },

    logo: {
        height: 110,
        width: 120,
        borderRadius: 50,
    },
    logoContainer: {
        position: 'absolute',
        top: 60,
        alignItems: 'center',

    },
    tagLine: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingVertical: 20,
    },
})

export default WelcomeScreen;