import React from 'react';
import '../css/HeaderComponent.css';
import NavbarComponent from './NavBarComponent';
import logo from '../logo.svg';
import { Link, NavLink } from 'react-router-dom';

function HeaderComponent(){
    const URL = process.env.URL_PLATAFORMA;
    const items = [
        {
          path: 'https://ideas.info.unlp.edu.ar/',
          label: 'Ideas',
        },
      ];
    return  (
        <>
        <header className="cabecera">
            <div className="container">
                <div className="logo">
                    <a href={ URL }><img src={logo} alt="Logo" height="48"/></a>
                </div>
                <nav id="options">
                    <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                        <NavLink to={item.path}>
                            {item.label}
                        </NavLink>
                        </li>
                    ))}
                    </ul>
                </nav>
            </div>
        </header>
        <NavbarComponent/>
        </>
    );
}

export default HeaderComponent;