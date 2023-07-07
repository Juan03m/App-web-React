import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/AlertComponent.css';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import Alert from '../../components/AlertComponent';
import { PeticionGET, PeticionDELETE } from '../../components/Api';

//Declaramos un título para la página
const titlePage = 'Listado de Generos';

function GenerosPage() {
  const[mensaje,setMensaje]=useState('');
  const [generos,setGeneros] = useState('');
  const urlGen='http://localhost:8000/generos';
  
  //Asigamos el titulo al documento
  document.title = titlePage;

  const expAlert = () => {
    setTimeout(() => {
      setMensaje('');
    }, 3000);
  };

  const deleteGenero = async (id) => {
    PeticionDELETE(urlGen + '/' + id, setMensaje);
    expAlert();
  };

  useEffect(() => {
      PeticionGET(urlGen,setMensaje,setGeneros);
      expAlert();
  }, []);

  return (
    <>
    <HeaderComponent/>
    <div className="container">
      <div className="cabeceraContenido">
        <h1>{titlePage}</h1>
        <Link to="/generos/new" className='addBtn'> Nuevo Genero con hook</Link>
      </div>
      {mensaje && <Alert type="error" msg={mensaje}/>}
      <table className="itemsCRUD">
        <tbody>
          {generos && generos.map((genero) => (
            <tr className="itemsCRUD-row" key={genero.id}>
            <td className="itemsCRUD-cell">{genero.nombre}</td>
            <td className="itemsCRUD-cell"><Link to={`/generos/edit/${genero.id}`} className='editBtn'> Editar</Link><Link to="#" className='deleteBtn' onClick={() => deleteGenero(genero.id)}> Borrar</Link></td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
    <FooterComponent/>
    </>
  );
}

export default GenerosPage;