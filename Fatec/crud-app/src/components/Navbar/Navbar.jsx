import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useAuthentication } from '../../hooks/useAuthentication';

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  return (
    <nav className={styles.navbar}>
      {user &&
        <ul className={styles.links_list}>
          <li>
            <NavLink to="/cadastro">Cadastrar</NavLink>
          </li>
          <li>
            <NavLink to="/perfil">Perfil</NavLink>
          </li>
          <button onsClick={logout()}>Sair</button>
        </ul>
      }
    </nav>
  )
}

export default Navbar;
