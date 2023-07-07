function GameCard(props){
    return (<article className="GameCard">
        <div class="GameCard-content">
        <header className="GameCard-thumbnail">
            <img src={`data:${props.imagentipo};base64,${props.imagen}`} alt={props.titulo} />
        </header>
        <div className="GameCard-info">
            <span className="GameCard-plataforma">{props.plataforma}</span>
            <h2 className="GameCard-title">{props.titulo}</h2>
            <p className="GameCard-description">{props.descripcion}</p>
        </div>
        <footer className="GameCard-footer">
            <a href={props.url} title={`Ir a la página de ${props.titulo}`} alt={`Ir a la página de ${props.titulo}`}>Ir al juego</a>
            <a href="#" className="genero"> {props.genero}</a>
        </footer>
        </div>
    </article>);
}

export default GameCard;
