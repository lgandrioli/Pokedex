import React from "react";
import './styles.css'

function Pokemon(props) {
  const { pokemon } = props;
  return (
    <div className="pokemon_card">
      <div className="pokemon_image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon_image"
        />
      </div>
      <div className="card_body">
        <div className="card_header">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card_footer">
        <div className="pokemon_type">
          {pokemon.types.map((type, index )=>{
            return(
              <div key={index} className="pokemon_type-text">{type.type.name}</div>
            )
          })}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
