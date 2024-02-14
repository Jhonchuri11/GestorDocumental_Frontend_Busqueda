import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './pages/Inicio';
import MainNav from './common/MainNav';
import MainHeader from './common/MainHeader';
import MainFooter from './common/MainFooter';
import Detalle from './pages/Detalle';
import Login_user from './pages/Login_user';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login_user/>}/>
          <Route path='/inicio' element={<InicioLayout/>}/>
          <Route path='/detalle' element={<DetalleLayout/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Funcionalidad que nos permite orndenar la estructura
function InicioLayout() {
  return (
    <>
      <MainNav/>
      <MainHeader/>
      <Inicio/>
      <MainFooter/>
    </>
  );
}
function DetalleLayout() {
  return (
    <>
      <MainNav/>
      <MainHeader/>
      <Detalle/>
      <MainFooter/>
    </>
  )
}
