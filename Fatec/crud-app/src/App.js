import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css';
import Home from "./pages/Home/Home"
import Perfil from './pages/Perfil/Perfil'
import Cadastro from  './pages/Cadastro/Cadastro'
import Footer from "./components/Footer/Footer"
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
