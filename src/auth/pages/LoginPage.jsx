import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../";

export const LoginPage = () => {
    const {doLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const onLogin = () => {
        doLogin("Gustavo Ordoño Poma");
        navigate("/heroes", {replace:true});
    };

    return (
        <div className="container mt-5">
            <h1>LoginPage</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    );
};