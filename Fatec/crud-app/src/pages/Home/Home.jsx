import React from 'react'
import styles from "./Home.module.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Home = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login, error: authError, loading } = useAuthentication();
  const handleSubmit = async (e) => {}

  return (
    <div className={styles.container}>
      <main className={styles.Home}>
          <form action="">
            <h1>Login</h1>
            <p>Faça login para fazer o que você deseja fazer.</p>
              <label>
                  <span>Email</span>
                  <input type="email" name='email' id='email' placeholder='nome@site.com.br'/>
              </label>
              <label>
                  <span>Senha</span>
                  <input type="password" name='password' id='password' placeholder='nome@site.com.br'/>
              </label>
              <button type="submit" className='btn'>Entrar</button>
          </form>
          <p><Link to="/cadastro">Cadastre-se</Link></p>
      </main>
    </div>
  )
}

export default Home;
