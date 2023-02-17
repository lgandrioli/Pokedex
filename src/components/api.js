

export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}
export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemonItems = async (limit = 50) => {
    try {
      let url = `https://pokeapi.co/api/v2/item?limit=${limit}/`;
      const response = await fetch(url);
      const data = await response.json();
  
      const items = await Promise.all(
        data.results.map(async (item) => {
          const itemUrl = item.url;
          const itemResponse = await fetch(itemUrl);
          const itemData = await itemResponse.json();
          return {
            name: itemData.name,
            sprite: itemData.sprites.default,
            cost: itemData.cost,
            flavorText: itemData.flavor_text_entries[0].text
          };
        })
      );
  
      return items;
    } catch (error) {
      console.log("error,", error);
    }
  };


 

