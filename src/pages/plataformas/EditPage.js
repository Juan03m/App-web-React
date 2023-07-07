import React, { useEffect, useState } from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import { useParams } from 'react-router-dom';
import '../../css/AlertComponent.css';
import Alert from '../../components/AlertComponent';
import axios from 'axios';

import {PeticionGET, PeticionPUT} from '../../components/Api';

//Declaramos una variable que almacenará el título de la página
const titlePage = 'Editar la plataforma';

function EditPagePlataformas() {
  
  //Seteamos en el título del documento nuestra variable de titlePage
  document.title = titlePage;

  const [mensaje,setMensaje] = useState('');
  const urlPlataformas='http://localhost:8000/plataformas'
  const { id } = useParams();
  const [nombre, setNombre] = useState('');
  const expAlert = () => {
    setTimeout(() => {
      setMensaje('');
    }, 3000);
  };

  const enviarForm = async (event) => {
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
    PeticionPUT(urlPlataformas + '/' + id, info, setMensaje);
    expAlert();
  };

  useEffect(() => {
    PeticionGET(urlPlataformas + '?id=' +id, setMensaje, (genero) => {
      if (genero.length > 0) {
        const nombre = genero[0].nombre;
        setNombre(nombre);
      }
    });
  }, []);

  useEffect(() => {
    PeticionGET(urlPlataformas + '?id=' + id, setNombre,setMensaje)
  }, [id]);

  return (
    <>
    <HeaderComponent/>
      <div className="container">
        <div className="cabeceraContenido">
          <h1>{titlePage}</h1>
        </div>
        {mensaje && <Alert type="error" msg={mensaje} />}
        <form id="editForm" onSubmit={enviarForm}>
          <label htmlFor="nombre">Nombre de la Plataforma:</label><br/>
          <input type="text" defaultValue={nombre}  /><br/>
          <button type="submit" className="submit">Actualizar</button>
        </form>
      </div>
    <FooterComponent/>
    </>
  );
}

export default EditPagePlataformas;