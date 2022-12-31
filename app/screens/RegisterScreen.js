import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton, ErrorMessages } from "../components/forms";
import userApi from "../api/users";
import useAuth from "./../auth/useAuth";
import authApi from '../api/auth';
import useApi from "../hooks/useApi";
import AppActivityIndicator from './../components/AppActivityIndicator';
import logger from "../utility/logger";


const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
    const registerApi = useApi(userApi.register)
    const loginApi = useApi(authApi.login)
    const auth = useAuth();
    const [error, setError] = useState();
    const handleSubmit = async (userInfo) => {
        // We need to remove the initial values from the userInfo
        const excludedKey = 'initialValues';
        const { [excludedKey]: ignored, ...newObject } = userInfo;
        // console.log('n', newObject)
        userInfo = newObject;
        const result = await registerApi.request(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError("An unexpected error occurred");
                logger.log(new Error(`${error}`))

            }
            return;
        }

        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        );
        auth.logIn(authToken);

    };

    return (
        <>
            <AppActivityIndicator visible={registerApi.loading || loginApi.loading} />
            <Screen style={styles.container}>
                <AppForm
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessages error={error} visible={error} />
                    <AppFormField
                        autoCorrect={false}
                        icon="account"
                        name="name"
                        placeholder="Name"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Register" />
                </AppForm>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default RegisterScreen;
