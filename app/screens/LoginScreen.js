import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from "yup"

import Screen from './../components/Screen';
import { ErrorMessages, AppForm, AppFormField, SubmitButton } from '../components/forms';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Eamil"),
    password: Yup.string().required().min(4).label("Password")
})

const LoginScreen = () => {
    const { logIn } = useAuth()
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password)
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false)
        logIn(result.data)
        // console.log(result.data)
        /* const user = jwtDecode(result.data)
        // You should store the user to be used in entire app
        // console.log(user)
        setUser(user);//set context user
        authStorage.storeToken(result.data); */

    }

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/R_logo_red.png")} />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessages error="Invalid email and/or password" visible={loginFailed} />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-adress"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAdress"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name={"password"}
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password"
                />

                <SubmitButton title={"login"} />



            </AppForm>


        </Screen>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    },


})

export default LoginScreen