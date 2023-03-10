import {useContext} from "react";
import {Navigate} from "react-router-dom";

import {AuthContext} from "../auth";

// this will gona be a High Order Component
export const PublicRoute = ({children}) => {
    const {logged} = useContext(AuthContext);

    return (!logged)
        ? children
        : <Navigate to="/heroes"/>
};