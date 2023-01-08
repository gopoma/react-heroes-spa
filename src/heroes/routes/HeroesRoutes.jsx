import {Navigate, Routes, Route} from "react-router-dom";
import {Navbar} from "../../ui";
import {DCPage, HeroPage, MarvelPage, SearchPage} from "../pages";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">
                <Routes>
                    <Route path="" element={<h1>HeroesApp</h1>}/>
                    <Route path="marvel" element={<MarvelPage/>}></Route>
                    <Route path="dc" element={<DCPage/>}></Route>
                    <Route path="search" element={<SearchPage/>}/>
                    <Route path=":id" element={<HeroPage/>}/>
                </Routes>
            </div>
        </>
    );
};