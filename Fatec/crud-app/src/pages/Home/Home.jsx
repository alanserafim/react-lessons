import React from 'react'
import styles from "./Home.module.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'  

const Home = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const {login, error: authError, loading } = useAuthentication()
  
  const handleSubmit = async (e)=>{
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }
    const res = await login (user)
    console.log(res)
  }

  useEffect(()=>{
    if(authError){
      setError(authError)
    }
  },[authError])
  
  return (
    <div className={styles.container}>
      <main className={styles.Home}>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p>Faça login para fazer o que você deseja fazer.</p>
              <label>
                  <span>Email</span>
                  <input type="email" name='email' id='email' placeholder='nome@site.com.br' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
              </label>
              <label>
                  <span>Senha</span>
                  <input type="password" name='password' id='password' placeholder='nome@site.com.br' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
              </label>
              {!loading && <button type="submit" className='btn'>Entrar</button>}
              {loading && <button type="submit" className='btn' disabled>Aguarde...</button>}
              {error && <p className='error'>{error}</p>}
          </form>
         <Link to='/cadastro'>Cadastre-se</Link>
      </main>
    </div>
  )
}

export default Home;
