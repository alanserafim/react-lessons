const minhaLista = [
  { id: "1", value: "Frutas" }, 
  { id: "2", value: "Doce" },
  { id: "3", value: "Sorvete"},
];

const lista = minhaLista.map((item) => 
    <div key={item.id}>
        <p>{item.value}</p>
        </div>
)

export default function Lista() {
  return (
    <div>
        <h2>Listas no React</h2>
        <h3>Sobremesas</h3>
        {lista}
    </div>
  )
}
