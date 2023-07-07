function FiltradoComponent({generos,plataformas,setParams}) {

  
    const filtradoForm=(event)=>{
        event.preventDefault();
        const parametros={
            nombre:event.target.nombre.value,
            genero:event.target.genero.value,
            plataforma:event.target.plataforma.value,
            orderby:event.target.orden.value
        }

        setParams(parametros);

    }






    return (
    <>
       <form id="filtrado" onSubmit={filtradoForm}>
        <input type="text" name="nombre" />
        
        <select name="genero" >
            <option value="">Ninguno</option>
            {generos && generos.map((genero) => (
              <option key={genero.id} value={genero.id}>
                {genero.nombre}
              </option>
            ))} 

          </select>

          <select name="plataforma"   >
          <option value="">Ninguno</option>

            {plataformas && plataformas.map((plataforma) => (
              <option key={plataforma.id} value={plataforma.id}>
                {plataforma.nombre}
              </option>
            ))} 
          </select>

          <select name="orden"   >
            <option value="ASC">A..Z</option>
            <option value="DESC">Z..A</option>
          </select>

        <button className="submit">Filtrar</button>
      </form>
    
    
    </>
    )
    }
export default FiltradoComponent;
    
