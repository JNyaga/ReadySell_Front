import { useContext } from "react"
import jwtDecode from "jwt-decode";

import AuthContext from './context';
import authStorage from "./storage";

export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logIn = (authToken) => {
        const user = jwtDecode(authToken)
        // You should store the user to be used in entire app
        // console.log(user)
        setUser(user);//set context user
        authStorage.storeToken(authToken);
    }

    const logOut = () => {
        setUser(null)
        authStorage.removeToken();
    }
    return { user, setUser, logIn, logOut }
}