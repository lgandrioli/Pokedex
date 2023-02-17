import React, { Component } from "react";
import { getPokemonItems } from "../../components/api";
import "./styles.css";
import {IoCart} from "react-icons/io5"

class Store extends Component {
  state = {
    pokemonItems: [],
    searchItem: "",
  };

  async componentDidMount() {
    try {
      const pokemonItems = await getPokemonItems();
      this.setState({ pokemonItems });
    } catch (error) {
      console.log("error fetching pokemon items", error);
    }
  }

  handleSearh = (event) => {
    this.setState({ searchItem: event.target.value });
  };
  render() {
    const { pokemonItems, searchItem } = this.state;
    const filteredItems = pokemonItems.filter((item) =>
      item.name.includes(searchItem)
    );
    return (
      <div className="store">
        <div>
          <img
            src="https://ik.imagekit.io/lgandrioli/loja.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676668154604"
            className="store_image"
            alt=""
          />
          <p className="store_text">Find the best Items for your journey!</p>
          <input
            type="text"
            placeholder="Search an Item..."
            onChange={this.handleSearh}
            className="store_searchbar"
          ></input>
        </div>
        <div className="pokemon_items_list">
          {pokemonItems &&
            filteredItems.map((item) => (
              <div className="pokemon_item">
                <img
                  src={item.sprite}
                  alt={item.name}
                  className="pokemon_item_image"
                />
                <ul className="pokemon_item_text">
                <li key={item.name} className="pokemon_item_name">
                  {item.name} 
                </li>
                <div className="item_price_div">
                <li className="item_price">$ : {item.cost}</li>
                <button className="item_cart"><IoCart size={40}/></button>
                </div>
                <li key={item.flavorText} className="pokemon_item_description">
                  {item.flavorText}
                </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Store;
