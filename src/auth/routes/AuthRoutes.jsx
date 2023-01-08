import {Routes, Route} from "react-router-dom";
import {LoginPage} from "../";

export const AuthRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage/>}/>
            </Routes>
        </>
    );
};