import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () => {
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
                    <button type="button" class="btn btn-success">Войти</button>
                </div>
            </div>
        </nav>

    );
}

export default Nav;