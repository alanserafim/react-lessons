import { useEffect, useState } from "react";

const minhaLista = [
  { id: "1", value: "Frutas" },
  { id: "2", value: "Doce" },
  { id: "3", value: "Sorvete" },
];

export default function ListaEfeitoColaterais() {
  const [produtos, setProdutos] = useState(minhaLista);
  const [pesquisa, SetPesquisa] = useState("");

  useEffect(()=>{
    if(pesquisa){
      const novaLista = minhaLista.filter((item)=>{
        return item.value.toLowerCase().includes(pesquisa.toLowerCase())
      })
      setProdutos(novaLista)
      } else {
        setProdutos(minhaLista)
      }
    },
    [pesquisa])

  return (
    <div>
      <h2>Efeitos Colaterais</h2>
      <h3>Busca sobremesas</h3>
      <input
        type="text"
        placeholder="Pesquise aqui"
        value={pesquisa}
        onChange={(e) => SetPesquisa(e.target.value)}
      />
      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.value}</p>
          </div>
        );
      })}
    </div>
  );
}
