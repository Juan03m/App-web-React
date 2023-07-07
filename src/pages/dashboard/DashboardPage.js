import React, { useEffect, useState } from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import FiltradoComponent from '../../components/FiltradoComponent';
import GameCard from '../../components/GameCardComponent';
import Alert from '../../components/AlertComponent';
import '../../css/GameCardComponent.css';
import '../../css/form.css';

import {PeticionGET} from '../../components/Api';


//Declaramos una variable que almacenará el título de la página
const titlePage = 'Listado de juegos';

function DashboardPage() {
  //Seteamos en el título del documento nuestra variable de titlePage
  document.title = titlePage;
  //Declaramos las constantes que necesitaremos
  const[mensaje,setMensaje]=useState('');
  const[filtro,setFiltro]=useState({});
  const[juegos,setJuegos]=useState('');
  const [generos,setGeneros] = useState('');
  const [plataformas,setPlataformas] = useState('');
  const urlJuegos = 'http://localhost:8000/juegos';
  const urlGen='http://localhost:8000/generos';
  const urlPlataformas='http://localhost:8000/generos'

  const expAlert = () => {
    setTimeout(() => {
      setMensaje('');
    }, 3000);
  };

  useEffect(() => {
    PeticionGET(urlGen,setMensaje,setGeneros,{});
    PeticionGET(urlPlataformas,setMensaje,setPlataformas,{});
    PeticionGET(urlJuegos,setMensaje,setJuegos,filtro);
    expAlert();
  }, [filtro]);

  return (
    <>
    <HeaderComponent/>
    <div className="container">
      <div className="cabeceraContenido">
        <h1>{titlePage}</h1>
      </div>
      <FiltradoComponent  generos={generos} plataformas={plataformas} setParams={setFiltro}/>
      {mensaje && <Alert type="error" msg={mensaje}/>}
      <div className="listGameCards">
          {Array.isArray(juegos) && juegos.map((juego) => (
          <GameCard
            key={juego.id}
            titulo={juego.nombre}
            imagen={juego.imagen}
            imagentipo={juego.tipo_imagen}
            descripcion={juego.descripcion}
            genero={juego.nombre_genero}
            plataforma={juego.nombre_plataforma}
            url={juego.url}
          />
        ))}
        </div>
        
    </div>
    <FooterComponent />
    </>
  );
}

export default DashboardPage;
