import React from 'react';
import '../css/NavbarComponent.css';
import { NavLink } from 'react-router-dom';

function NavbarComponent(){
    const items = [
        {
          path: '/',
          label: 'Inicio',
        },
        {
          path: '/generos',
          label: 'Géneros',
        },
        {
          path: '/plataformas',
          label: 'Plataformas',
        }
      ];
    return (
        <nav id="menu-principal">
            <div className="container">
                <ul>
                {items.map((item, index) => (
                    <li key={index}>
                    <NavLink to={item.path}>
                        {item.label}
                    </NavLink>
                    </li>
                ))}
                </ul>
            </div>
        </nav>
    );
}

export default NavbarComponent;