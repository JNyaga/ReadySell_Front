import client from './client'
/* Used to add expo tokens to users doc in db */

const register = (pushToken) => client.post('/expoPushTokens', { token: pushToken })

export default {
    register,
}