import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

import './App.css';
import Home from "./pages/Home/Home"
import Perfil from './pages/Perfil/Perfil'
import Cadastro from  './pages/Cadastro/Cadastro'
import Footer from "./components/Footer/Footer"
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext'
import { useAuthentication } from './hooks/useAuthentication'
import { onAuthStateChanged } from 'firebase/auth'
import Create from './pages/Crud/Create';

function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()
  const loadingUser = user===undefined

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  }, [auth]);

  if(loadingUser){
    return <p>Carregando ...</p>
  };

  return (
    <>
    <AuthProvider value={{user}}>
      <BrowserRouter>
      {user && <Navbar />}
        <Routes>
          <Route path='/perfil' element={user ? <Perfil /> : <Navigate to='/' />} />
          <Route path='/' element={!user ? <Home /> : <Navigate to='/perfil' />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AuthProvider>
  </>
  );
}

export default App;
