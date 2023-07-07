import React, { useEffect, useState } from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import { Link } from 'react-router-dom';
import { PeticionDELETE, PeticionGET } from '../../components/Api';
import Alert from '../../components/AlertComponent';


//Declaramos un título para la página
const titlePage = 'Listado de plataformas';

function PlataformasPage() {
  const[mensaje,setMensaje]=useState('');
  const [plataformas,setPlataformas] = useState('');
  const urlPlataformas='http://localhost:8000/plataformas'
  
  //Asigamos el titulo al documento
  document.title = titlePage;

  const deletePlataforma = async (id) => {
    PeticionDELETE(urlPlataformas + '/' + id, setMensaje);
  };
  

  useEffect(() => {
    PeticionGET(urlPlataformas,setMensaje,setPlataformas)
  }, []);

  return (
    <>
    <HeaderComponent/>
    <div className="container">
      <div className="cabeceraContenido">
        <h1>{titlePage}</h1>
        <Link to="/plataformas/new" className='addBtn'> Nueva Plataforma con hook</Link>
      </div>
      {mensaje && <Alert type="error" msg={mensaje}/>}
      <table className="itemsCRUD">
          {plataformas &&  plataformas.map((plataforma) => (
          <tr className="itemsCRUD-row" key={plataforma.id}>
          <td className="itemsCRUD-cell">{plataforma.nombre}</td>
          <td className="itemsCRUD-cell"><Link to={`/generos/edit/${plataforma.id}`} className='editBtn'> Editar</Link><Link to="#" className='deleteBtn' onClick={() => deletePlataforma(plataforma.id)}> Borrar</Link></td>
      </tr>
        ))}
      </table>
    </div>
    <FooterComponent/>
    </>
  );
}

export default PlataformasPage;