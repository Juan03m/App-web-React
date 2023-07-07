import React, { useEffect, useState } from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import { useParams } from 'react-router-dom';
import '../../css/AlertComponent.css';
import Alert from '../../components/AlertComponent';

import {PeticionGET, PeticionPUT} from '../../components/Api';

//Declaramos una variable que almacenará el título de la página
const titlePage = 'Editar el género';

function EditPageGeneros() {

  //Seteamos en el título del documento nuestra variable de titlePage
  document.title = titlePage;

  const { id } = useParams();
  const [nombre, setNombre] = useState('');
  const[mensaje,setMensaje]=useState('');
  const urlGeneros = 'http://localhost:8000/generos';

  const expAlert = () => {
    setTimeout(() => {
      setMensaje('');
    }, 3000);
  };

  const enviarForm = (event) => {
    //Prevenimos el envío del formulario
    event.preventDefault();
    const info = {
      nombre: event.target.nombre.value
    };
    if(info.nombre === ''){
      setMensaje('Debes completar el nombre');
      expAlert();
      return false;
    }
    PeticionPUT(urlGeneros + '/' + id, info, setMensaje);
    expAlert();
  };

  useEffect(() => {
    PeticionGET(urlGeneros + '?id=' +id, setMensaje, (genero) => {
      if (genero.length > 0) {
        const nombre = genero[0].nombre;
        setNombre(nombre);
      }
    });
  }, []);

  return (
    <>
    <HeaderComponent/>
      <div className="container">
        <div className="cabeceraContenido">
          <h1>{titlePage}</h1>
        </div>
        {mensaje && <Alert type="error" msg={mensaje} />}
        <form id="editForm" onSubmit={enviarForm}>
          <label htmlFor="nombre">Nombre del Genero:</label><br/>
          <input type="text" defaultValue={nombre} name="nombre" /><br/>
          <button type="submit" className="submit">Actualizar</button>
        </form>
      </div>
    <FooterComponent/>
    </>
  );
}

export default EditPageGeneros;