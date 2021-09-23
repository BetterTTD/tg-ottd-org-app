import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Header : FC = () => (
    <header className="mb-auto">
        <div>
            <h3 className="float-md-start mb-0">TeamGame</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
                <NavLink className="nav-link" to="/">Text</NavLink>
                <NavLink className="nav-link" to="/welcome-server">Welcome Server</NavLink>
                <NavLink className="nav-link" to="/public-server">Public Server</NavLink>
            </nav>
        </div>
    </header>
);

export default Header;