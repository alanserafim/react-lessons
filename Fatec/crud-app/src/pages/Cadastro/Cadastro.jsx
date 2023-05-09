import React from 'react'
import style from "./Cadastro.module.css"
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Cadastro = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [sucess, setSucess] = useState("")

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    const user = {
      displayName,
      email,
      password
    }

    if(password != confirmPassword) {
      setError("As senhas precisam ser iguais")
      return
    }

    const res = await createUser (user)
    if (setSucess(res)){
      setDisplayName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
    }
  }

  useEffect(()=>{
    if(authError) {
      setError(authError)
    }
  })
  
  return (
    <div className={style.cadastro}>
      <form className={style.cadastroForm} onSubmit={handleSubmit}>
        <h1>Formulário de Cadastro</h1>
        <label>
          <span>Nome:</span>
          <input type="displayname" name="displayname" id="displayname" placeholder="Nome completo" value={displayName} onChange={(e)=>setDisplayName(e.target.value)}></input>
        </label>
        <label>
          <span>email:</span>
          <input type="email" name="email" id="email" placeholder="site@dominio.com" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        </label>
        <label>
          <span>Confirmar senha:</span>
          <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
        </label>
        <div>
          {!loading && <button type="submit" className="btn">Confirmar</button>}
          {!loading && <button type="reset" className="btn" disabled>Apagar</button> }
          {error && <p className='error'>{error}</p>}
          {sucess && <p className='sucesss'>Usuário cadastrado com sucesso</p>}
        </div>
      </form>
    </div>
  )
}

export default Cadastro;
