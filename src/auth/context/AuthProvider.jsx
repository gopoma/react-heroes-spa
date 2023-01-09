import {useReducer} from "react";
import {authReducer} from "./authReducer";
import {types} from "../types";
import {AuthContext} from "./AuthContext";

const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
        logged: Boolean(user),
        user
    };
};

// this is a High Order Component
export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init);

    // doLogin puede ser una función asíncrona
    const doLogin = (name = "") => {
        const user = {
            id: "amongus",
            name
        };
        
        const action = {
            type: types.login,
            payload: user
        };
        
        localStorage.setItem("user", JSON.stringify(user));

        dispatch(action);
    };

    const doLogout = () => {
        const action = {
            type: types.logout
        };

        localStorage.removeItem("user");

        dispatch(action);
    };

    return (
        <AuthContext.Provider value={{
            ...authState, 
            doLogin, 
            doLogout
        }}>
            {children}
        </AuthContext.Provider>
    );
};