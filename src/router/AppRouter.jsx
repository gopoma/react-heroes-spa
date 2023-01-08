import {Route, Routes} from "react-router-dom";
import {AuthRoutes} from "../auth";
import {HeroesRoutes} from "../heroes";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/auth/*" element={<AuthRoutes/>}/>
                <Route path="/heroes/*" element={<HeroesRoutes/>}/>

                <Route path="/*" element={<h1>Not Found</h1>}/>
            </Routes>
        </>
    );
};