import { useState } from "react"
import  styles  from './button.module.css'

export default function Contador(){

    const [contador, setContador] = useState(0);

    function aumentar(){
        setContador(contador + 1)
    }

    function diminuir(){
        setContador(contador - 1)
    }

    return(
        <div className="container">
        <h1>Contador de Cliques</h1>
        { contador > 9 ? <h2> Valor muito alto </h2> : null }
        <h3>{contador}</h3>
        <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
        <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
        </div>
    )

}   