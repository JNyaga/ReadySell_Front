import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Accountscreen from './../screens/AccountScreen';
import Messagescreen from './../screens/MessageScreen';
import ReplyMessageScreen from './../screens/ReplyMessageScreen';
import routes from "./routes";
import AccountEditScreen from './../screens/AccountEditScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerTitleAlign: "center",
            // headerBackTitle: true,
        }}
    >
        <Stack.Screen name="Account" component={Accountscreen} />

        <Stack.Screen name={routes.ACCOUNT_EDIT} component={AccountEditScreen} />
        <Stack.Screen name="Messages" component={Messagescreen} />
        <Stack.Screen name="ReplyMessage" component={ReplyMessageScreen} />
    </Stack.Navigator>
);


export default AccountNavigator