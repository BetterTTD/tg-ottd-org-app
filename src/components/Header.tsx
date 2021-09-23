import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
    {
        Name: "Home",
        Path: "/"
    },
    {
        Name: "Welcome Serve",
        Path: "/welcome-server"
    },
    {
        Name: "Public Serve",
        Path: "/public-server"
    },
];

const Header : FC = () => (
    <header className="mb-auto">
        <div>
            <h3 className="float-md-start mb-0">TeamGame</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
                {routes.map((route, id) => 
                    <NavLink 
                        key={id} 
                        to={route.Path} 
                        className="nav-link"
                        isActive={(_, location) => route.Path === location.pathname}>
                        {route.Name}
                    </NavLink>)}
            </nav>
        </div>
    </header>
);

export default Header;