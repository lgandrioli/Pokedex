import React from "react";
import Pagination from "../pagination";
import Pokemon from "../pokemonCard";
import CardSkeleton from "../skeletons/pokemonCardSkeleton";
import "./styles.css";

const Infodex = (props) => {
  const { pokemons, loading, page, totalPages, setPage } = props;

  const onPreviousClickHandler = () => {
    if(page > 0) {
      setPage(page-1)
      console.log("error")
    }
  };
  const onNextClickHandler = () => {
    if(page + 1 !== totalPages) {
      setPage(page+1)
    }
  };

  return (
    <div className="">
      <div className="header">
      <Pagination
        page={page + 1}
        
        totalPages={totalPages}
        onPreviousClick={onPreviousClickHandler}
        onNextClick={onNextClickHandler}
      />
      </div>

      {loading ? (
        <CardSkeleton/>
      ) : (
        <div className="pokedex_grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Infodex;
