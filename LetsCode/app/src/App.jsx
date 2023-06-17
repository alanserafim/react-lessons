import MeuBotao from "./assets/components/Botao/Botao"
import Contador from "./assets/components/Contador/Contador"
import MeuParagrafo from "./assets/components/Paragrafo/MeuParagrafo"

export default function App() {

  return (
    <>
      <div>
      <h1>Olá Mundo, React!</h1>
      <MeuParagrafo/>
      <MeuBotao conteudo="primeiro click" numero="1"/>
      <MeuBotao conteudo="segundo click"  numero="2"/>
      <MeuBotao conteudo="terceiro click" numero="3"/>
      <Contador/>
      </div>
    </>
  )
}

