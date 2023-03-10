import React, { useState } from "react";
import "./styles.css";
import "./types.css";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

function Pokemon(props) {
  const { pokemon } = props;

  const [showStats, setShowStats] = useState(false);

  const handleShowStats = () => {
    setShowStats(!showStats);
  };

  const [isShiny, setIsShiny] = useState(false);

  const handleToggleShiny = () => {
    setIsShiny(!isShiny);
  };



  return (
    <body className="pokemon_card">
      <div className={pokemon.types[0].type.name}>
        <div className="card_header">
          <div>
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
          </div>
          <button
            type="button"
            onClick={handleShowStats}
            className="pokemon_stats_button"
          >
            <MdOutlineArrowDropDownCircle size={30} />
          </button>

          {showStats && (
            <>
              <div className={"pokemon_stats"}>

                STATS:
                {pokemon.stats.map((stats, index) => {
                  return (
                    <>
                    <div
                      key={index}
                      className={stats.stat.name}
                      id={stats.stat.name}
                    >
                      {stats.stat.name} : {stats.base_stat}
                    </div>
                    </>

                  );
                })}
              </div>
            </>
          )}

        </div>
        <button
          type="button"
          className="pokemon_shiny_button"
          onClick={handleToggleShiny}
        >
          <AiFillStar size={32} color={isShiny ? "#e1ad03" : "#fdfdfd"} />
        </button>
        <div className="pokemon_image-container">
          <img
            alt={pokemon.name}
            src={
              isShiny
                ? pokemon.sprites.other["official-artwork"].front_shiny
                : pokemon.sprites.other["official-artwork"].front_default
            }
            className="pokemon_image"
          />
        </div>
        <div className="card_body">
          <div className="card_footer">
            <div>
              {pokemon.types.map((type, index) => {
                return (
                  <div
                    key={index}
                    className={type.type.name}
                    id={type.type.name}
                  >
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Pokemon;
