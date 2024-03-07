import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './pages/Inicio';
import MainNav from './common/MainNav';
import MainHeader from './common/MainHeader';
import MainFooter from './common/MainFooter';
import Detalle from './pages/Detalle';
import Login_user from './pages/Login_user';
import ListDocumentos from './pages/crud_documentos/ListDocumentos';
import CreatedDocumento from './pages/crud_documentos/CreatedDocumento';
import UpdateDocumento from './pages/crud_documentos/UpdateDocumento';
import DeleteDocumento from './pages/crud_documentos/DeleteDocumento';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login_user/>}/>
          
          <Route path='/inicio' element={
          
              <InicioLayout/>
         
          }
          />
          <Route path='/detalle' element={
         
            <DetalleLayout/>
        
          }
          />
          <Route path='/listadodocumento' element={
          
            <ListadoLayout/>
        
          }
          />
          <Route path='/createDocumento' element={
       
            <CreatedDocumentoLayout/>
          
          }
          />
          <Route
          path='/editarDocumento/:id' element={
            <UpdateDocumentoLayout/>
          }/>
          <Route
          path='/deleteDocumento/:id' element={
            <DeleteDocumentoLayout/>
          }/>
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
function ListadoLayout() {
  return (
    <>
      <MainNav/>
      <MainHeader/>
      <ListDocumentos/>
      <MainFooter/>
    </>
  )
}
function CreatedDocumentoLayout() {
  return (
    <>
      <MainNav/>
      <MainHeader/>
      <CreatedDocumento/>
      <MainFooter/>
    </>
  )
}

function UpdateDocumentoLayout() {
  return (
    <>
      <MainNav/>
      <MainHeader/>
      <UpdateDocumento/>
      <MainFooter/>
    </>
  )
}

function DeleteDocumentoLayout() {
  return (
    <>
      <MainNav/>
      <MainHeader/>
      <DeleteDocumento/>
      <MainFooter/>
    </>
  )
}