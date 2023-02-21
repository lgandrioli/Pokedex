import React, { useState, useEffect } from "react";
import {
  getPokemonData,
  getPokemons,
  searchPokemon,
} from "../../components/api";

import Infodex from "../../components/infoDex";
import SearchBar from "../../components/searchbar";
import { options } from "../../components/filterType/options";
import Select from "../../components/filterType";

function Pokedex() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [, setNotFound] = useState(false);

  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState("all");

  const itemsPerPage = 20;

  const fetchPokemons = async (type) => {
    try {
      setLoading(true);
      const data = await getPokemons(itemsPerPage, itemsPerPage * page, type);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(
        results.filter(
          (pokemon) =>
            filter === "all" ||
            pokemon.types.some(
              (type) => type.type.name === filter
            )
        )
      );
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
    const result = await searchPokemon(pokemon, filter);
    if (!result) {
      setLoading(false);
      setNotFound(true);
    } else {
      setPokemons([result]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons(filter);
  }, [page, filter]);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="pokedex">
      <div className="search_container">
        <Select
          options={options}
          value={filter}
          onChange={handleFilterChange}
        />
        <SearchBar onSearch={onSearchHandler} />
      </div>
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
