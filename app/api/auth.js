import client from "./client";
/* returns authtoken f user login is found in database */

const login = (email, password) => client.post('/auth', { email, password })



export default {
    login,
}