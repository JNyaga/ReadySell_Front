import { useEffect } from 'react';
import { Platform } from 'react-native';
import * as Notifications from "expo-notifications";

import expoPushTokensApi from '../api/expoPushTokens';
import logger from '../utility/logger';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});



export default useNotifications = (notificationListener) => {
    /* hook used to easen using notification
    @notificationListener-> action to be performed of Notification recieved and clicked
     */
    useEffect(() => {
        registerForPushNotifications()

        if (notificationListener) Notifications.addNotificationResponseReceivedListener(notificationListener)

    }, [])

    const registerForPushNotifications = async () => {
        try {
            if (Platform.OS === 'android') {
                await Notifications.setNotificationChannelAsync('default', {
                    name: 'default',
                    importance: Notifications.AndroidImportance.MAX,
                    vibrationPattern: [0, 250, 250, 250],
                    lightColor: '#FF231F7C',
                });
            }
            const { status } = await Notifications.getPermissionsAsync()
            if (status !== "granted") return;
            // console.log(status)

            const token = await Notifications.getExpoPushTokenAsync()
            expoPushTokensApi.register(token.data)

        } catch (error) {
            logger.log(new Error(`Error getting a push token ${error}`))

        }
    }


}