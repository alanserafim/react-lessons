import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <ul className={styles.links_list}>
        <li>
            <NavLink to="/cadastro">Cadastrar</NavLink>
        </li>
        <li>
            <NavLink to="/perfil">Perfil</NavLink>
        </li>
        <button>Sair</button>
    </ul>
</nav>
  )
}

export default Navbar;
