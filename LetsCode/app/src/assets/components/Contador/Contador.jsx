import { useState } from "react"


export default function Contador(){

    const [contador, setContador] = useState(0);

    function aumentar(){
        setContador(contador + 1)
    }

    return(
        <div>
        <h2>Contador de Cliques</h2>
        <h3>{contador}</h3>
        <button onClick={aumentar}>Aumentar</button>
        </div>

)

}