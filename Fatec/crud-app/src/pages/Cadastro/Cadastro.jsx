import React from 'react'
import style from "./Cadastro.module.css"

const Cadastro = () => {
  return (
    <div className={style.cadastro}>
      <form className={style.cadastroForm}>
        <h1>Formulário de Cadastro</h1>
        <label>
          <span>Nome:</span>
          <input type="displayname" name="displayname" id="displayname" placeholder="Nome completo"></input>
        </label>
        <label>
          <span>email:</span>
          <input type="email" name="email" id="email" placeholder="site@dominio.com"></input>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" id="password"></input>
        </label>
        <label>
          <span>Confirmar senha:</span>
          <input type="password" name="confirmPassword" id="confirmPassword"></input>
        </label>
        <div>
        <button type="submit" className="btn">Confirmar</button>
        <button type="reset" className="btn">Apagar</button>
        </div>

      </form>
    </div>
  )
}

export default Cadastro;
