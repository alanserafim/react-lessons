import React from 'react'
import styles from './Perfil.module.css'
import { useAuthValue } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

const Perfil = () => {
  const { user } = useAuthValue()
  return (
    <main className='container'>

      <div className={styles.perfil}>
        {
          user ?
            <>
              <p>Olá, {user.displayName}, bem-vindo!</p>
              <p>Seu e-mail é: {user.email}!</p>
            </> :
            <Navigate to='/' />
        }

        <div className={styles.profile_card}>
          <div className={styles.user_generals}>
            <div >
              <img className={styles.img} src="https://randomuser.me/api/portraits/women/79.jpg" alt="user"/>
            </div>
            <h2>Informações gerais</h2>
            <p> {user.displayName}</p>
          </div>
          <div className={styles.user_info}>
          <h2>Info</h2>
          <p> {user.email}</p>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Perfil
