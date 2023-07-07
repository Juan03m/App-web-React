import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import React, { useState } from 'react';
import '../../css/form.css';
import Alert from '../../components/AlertComponent';
import { PeticionPOST } from '../../components/Api';


//Declaramos una variable que almacenará el título de la página
const titlePage = 'Crear una nueva plataforma';

function NewPagePlataformas() {

  const [mensaje,setMensaje] = useState('');
  
  const urlPlataformas='http://localhost:8000/plataformas'
  
  const expAlert = () => {
    setTimeout(() => {
      setMensaje('');
    }, 3000);
  };

  //Seteamos en el título del documento nuestra variable de titlePage
  document.title = titlePage;

  const enviarForm = async (event) => {
    //Prevenimos el envío del formulario
    event.preventDefault();
    const nombre = event.target.nombre.value;
    if(nombre === ''){
      setMensaje('Debes completar el nombre');
      expAlert();
      return false;
    }
    let data = {      
      "nombre":nombre
    };
    PeticionPOST(urlPlataformas,data,setMensaje);
    expAlert();
  };

  return (
    <>
    <HeaderComponent/>        
      <div className="container">
        <div className="cabeceraContenido">
          <h1>{titlePage}</h1>
        </div>
        {mensaje && <Alert type="error" msg={mensaje} />}
        <form onSubmit={enviarForm} id="form" className='formu'>
          <input type="text" placeholder="Nombre.." name="nombre" />
          <button type="submit" className="submit">Crear</button>
        </form>
      </div>
    <FooterComponent/>
    </>
  );
}

export default NewPagePlataformas;