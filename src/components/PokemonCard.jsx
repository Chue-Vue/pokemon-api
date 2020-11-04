const PokemonCard = props => {
    const {pokemon} = props;

    return(
        <>
        {/* <div>
            <ul>
                <li>{pokemon.name}</li>
            </ul>
        </div> */}
        <div className="card col-2 align-self-center">
            <div className="card-body">
                <h2 className="card-title">{pokemon.name}</h2>
            </div>
        </div>
        </>
    )

}

export default PokemonCard;