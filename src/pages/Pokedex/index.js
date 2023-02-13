import React, { useState, useEffect } from "react";
import {
  getPokemonData,
  getPokemons,
  searchPokemon,
} from "../../components/api";

import Infodex from "../../components/infoDex";
import SearchBar from "../../components/searchbar";

function Pokedex() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const [pokemons, setPokemons] = useState([]);

  const itemsPerPage = 20;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage));
    } catch (error) {
      console.log("fetchErro", error);
    }
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setLoading(false);
      setNotFound(true);
    } else {
      setPokemons([result]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, [page])


  

  return (
    <div className="pokedex">
      <SearchBar   onSearch={onSearchHandler}/>
      <Infodex
        pokemons={pokemons}
        loading={loading}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      
      />
    </div>
  );
}

export default Pokedex;
