import MeuBotao from "./assets/components/Botao/Botao"
import BuscaFetch from "./assets/components/BuscaFetch/BuscaFetch"
import Contador from "./assets/components/Contador/Contador"
import Lista from "./assets/components/Lista/Lista"
import ListaEfeitoColaterais from "./assets/components/Lista_efeitos/ListaEfeitosColaterais"
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
      <br/>
      <br/>
      <Contador/>
      <br/>
      <br/>
      <Lista/>
      <br/>
      <br/>
      <ListaEfeitoColaterais/>
      <br/>
      <br/>
      <BuscaFetch/>
      <br/>
      <br/>
      </div>
    </>
  )
}

