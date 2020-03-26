import React from 'react';
import {NavLink} from "react-router-dom";
import LogIn from "./LogIn/LogIn";

const Nav = ({isPopup, setIsPopup}) => {
    const handlerOnClick = () => {
        setIsPopup(true)
    }


    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
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
                    <button type="button" class="btn btn-success" onClick={handlerOnClick}>Войти</button>
                    {isPopup && <LogIn setIsPopup={setIsPopup}/>}
                </div>
            </div>
        </nav>

    );
}

export default Nav;
