import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'
import logger from '../utility/logger'

const key = "authToken"

const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken)

    } catch (error) {
        logger.log(new Error(`Error storing the authtoken ${error}`))
    }
}

const getToken = async () => {
    try {

        return await SecureStore.getItemAsync(key);


    } catch (error) {
        logger.log(new Error(`Error getting the authtoken ${error}`))


    }
}

const getUser = async () => {
    const token = await getToken();
    if (token) return jwtDecode(token)
    return null;
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);

    } catch (error) {
        logger.log(new Error(`Error removing the auth token ${error}`))


    }

}

export default {
    getToken,
    getUser,
    removeToken,
    storeToken
}