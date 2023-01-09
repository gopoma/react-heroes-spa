import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRoutes} from "../auth";
import {PrivateRoute, PublicRoute} from "./";
import {HeroesRoutes} from "../heroes";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/auth/login"/>}/>
                <Route path="/auth/*" element={
                    <PublicRoute>
                        <AuthRoutes/>
                    </PublicRoute>
                }/>
                <Route path="/heroes/*" element={
                    <PrivateRoute>
                        <HeroesRoutes/>
                    </PrivateRoute>
                }/>

                <Route path="/*" element={<h1>Not Found</h1>}/>
            </Routes>
        </>
    );
};