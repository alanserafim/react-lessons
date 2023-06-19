import { useEffect, useState } from "react";

function BuscaFetch() {

 const [tarefas, setTarefas] = useState([])   

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch("https://jsonplaceholder.typicode.com/todos");
      const resultadoFinal = await resultado.json();
      return resultadoFinal;
    }
    buscarDados().then(res => setTarefas(res))
  }, []);

  return (
    <div>
      <h2>Buscando Dados</h2>
      <ol>
        {tarefas.map((tarefa) => {
          return (
          <li key={tarefa.id}>
            {tarefa.title} 
            {tarefa.completed ? "- ok" : null}
        </li>
          )
        })}
      </ol>
    </div>
  );
}

export default BuscaFetch;
