import {useContext} from "react";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../auth";

export const Navbar = () => {
    const {logged, user, doLogout} = useContext(AuthContext);
    const {pathname, search} = useLocation();
    const navigate = useNavigate();

    const onLogout = () => {
        doLogout();
        const lastPath = pathname + search;
        localStorage.setItem("lastPath", lastPath);
        navigate("/auth/login", {replace:true});
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <Link 
                    className="navbar-brand"
                    to="/heroes"
                >
                    Asociaciones
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="w-100 navbar-nav">
                        <NavLink
                            className={({isActive}) => `nav-link ${(isActive) ? "active" : ""}`}
                            to="/heroes/marvel"
                        >
                            Marvel
                        </NavLink>
                        <NavLink
                            className={({isActive}) => `nav-link ${(isActive) ? "active" : ""}`}
                            to="/heroes/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className={({isActive}) => `nav-link ${(isActive) ? "active" : ""}`}
                            to="/heroes/search"
                        >
                            Search
                        </NavLink>
                        <div className="ms-lg-auto d-lg-flex">
                            {
                                logged && <span className="nav-item nav-link">{user.name}</span>
                            }
                            <span
                                className="nav-item nav-link cursor-pointer"
                                onClick={onLogout}
                            >
                                Logout
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};