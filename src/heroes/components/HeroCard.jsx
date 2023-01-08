import {useMemo} from "react";
import { Link } from "react-router-dom";

const CharactersByHero = ({characters, alter_ego}) => {
    return (characters === alter_ego)
        ? (<></>)
        : (<p>{characters}</p>)
};

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const heroImageURL = useMemo(() => `/assets/heroes/${id}.jpg`, [id]);

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img 
                            src={heroImageURL} 
                            className="card-img" 
                            alt={superhero} 
                        />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <div className="card-title">{superhero}</div>
                            <p className="card-text">{alter_ego}</p>

                            {/*
                                (alter_ego !== characters) && (<p>{characters}</p>)
                                (alter_ego !== characters) && (<p>{characters}</p>) as a isolated component
                            */}

                            <CharactersByHero
                                characters={characters}
                                alter_ego={alter_ego}
                            />
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            <Link to={`/heroes/${id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};