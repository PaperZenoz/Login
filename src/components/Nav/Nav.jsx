import React from 'react';
import {NavLink} from "react-router-dom";
import LogIn from "./LogIn/LogIn";

const Nav = ({isPopup, setIsPopup, setLogIn, logIn}) => {
    const handlerOnLogInClick = () => {
        setIsPopup(true)
    }

    const handlerOnLogOutClick = () => {
        setLogIn(null)
    }


    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-5">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav w-100">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/main">Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/news">Новости</NavLink>
                            </li>
                    </ul>
                    {logIn === null ? <button type="button" className="btn btn-success" onClick={handlerOnLogInClick}>Войти</button> : <button type="button" className="btn badge-danger" onClick={() => handlerOnLogOutClick()}>Выйти</button>}
                    {isPopup && <LogIn setIsPopup={setIsPopup} setLogIn={setLogIn} /> }
                </div>
            </div>
        </nav>

    );
}

export default Nav;
