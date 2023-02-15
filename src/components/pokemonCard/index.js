import React from "react";
import "./styles.css";
import "./types.css";


function Pokemon(props) {
  const { pokemon } = props;
  return (
    <div className="pokemon_card">
    <body className={pokemon.types[0].type.name}>
      <div className="card_header">
        <h3>{pokemon.name}</h3>
        <div>#{pokemon.id}</div>
      </div>
      <div className="pokemon_image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon_image"
        />
      </div>
      <div className="card_body">
        <div className="card_footer">
          <div>
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className={type.type.name} id={type.type.name}>
                  {type.type.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </body>
    </div>
  );
}

export default Pokemon;
