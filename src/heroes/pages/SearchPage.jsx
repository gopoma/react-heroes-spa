import {useMemo} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import queryString from "query-string";
import {useForm} from "../../hooks";
import {getHeroesByName} from "../helpers";
import {HeroCard} from "../components";

export const SearchPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const {q = ""} = queryString.parse(location.search);
    const heroes = useMemo(() => getHeroesByName(q), [q]);
    const showSearch = q === "";
    const showError = q !== "" && heroes.length === 0;

    const {searchText, onInputChange} = useForm({
        searchText: q
    });


    const onSearchSubmit = (event) => {
        event.preventDefault();
        
        navigate(`?q=${searchText}`);
    };

    return (
        <>
            <h1>Seach</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr/>

                    <form onSubmit={onSearchSubmit}>
                        <input 
                            type="text"
                            placeholder="Seach a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off" 
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-outline-primary mt-2">
                            Seach
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    <div 
                        className="alert alert-primary animate__animated animate__fadeIn"
                        style={{display: showSearch ? "" : "none"}}
                    >
                        Search a hero
                    </div>
                    <div 
                        className="alert alert-danger animate__animated animate__fadeIn"
                        style={{display: showError ? "" : "none"}}
                    >
                        No hero with <b>{q}</b>
                    </div>

                    {
                        heroes.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
};