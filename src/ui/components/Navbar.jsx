import {Link, NavLink, useNavigate} from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        console.log("logout");
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
                        <span
                            className="nav-item nav-link cursor-pointer ms-lg-auto"
                            onClick={onLogout}
                        >
                            Logout
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};