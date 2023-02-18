import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { IoCart } from "react-icons/io5";
import {CiCircleRemove} from "react-icons/ci"

const Store = () => {
  const [pokemonItems, setPokemonItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef(null);


  const fetchPokemonItems = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/item?limit=50`);
      const data = await response.json();


      const itemsWithSprites = await Promise.all(
        data.results.map(async (item) => {
          const response = await fetch(item.url);
          const data = await response.json();

          return {
            name: item.name,
            cost: data.cost,
            flavorText: data.flavor_text_entries[0].text,
            sprite: data.sprites.default,
            id: data.id,
          };
        })
      );

      setPokemonItems(itemsWithSprites);
    } catch (error) {
      console.log("Error fetching pokemon items", error);
    }
  };
  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };
  const removeFromCart = (event, item) => {
    event.stopPropagation();
    setCartItems((prevCartItems) => prevCartItems.filter((i) => i.name !== item.name));
  };

  const handleClick = (event) => {
    if (
      cartRef.current &&
      (cartRef.current.contains(event.target) ||
        event.target.classList.contains("item_cart"))
    ) {
      return;
    }
    setShowCart(false);
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  useEffect(() => {
    fetchPokemonItems();
  }, []);

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const filteredItems = pokemonItems.filter((item) =>
    item.name.includes(searchItem)
  );

  return (
    <div className="store">
      <div className="store_container">
        <img
          src="https://ik.imagekit.io/lgandrioli/loja.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676668154604"
          className="store_image"
          alt=""
        />
        <p className="store_text">Find the best Items for your journey!</p>
        <input
          type="text"
          placeholder="Search an Item..."
          onChange={handleSearch}
          className="store_searchbar"
        ></input>
      </div>
      <div className="cart_container">
      your cart
      <button onClick={handleShowCart} className="button_cart">
        <IoCart size={40} />
        {showCart && (
            <>
       
          <div className="cart" ref={cartRef }>
          <button onClick={handleShowCart} className="closeicon"><CiCircleRemove size={30}/></button>
            {cartItems.length === 0 ? (
              <p className="cart_text">Your cart is empty :( ... Try adding something to it!</p>
            ) : (
              <ul className="cart_list">
                {cartItems.map((item) => (
                  <li key={item.name} className="cart_item"><img src={item.sprite} alt={item.name}/>{item.name} ${item.cost}<div onClick={(event) =>removeFromCart(event,item)}><CiCircleRemove size={20}/></div></li>
                ))}
               
              </ul>
            )}
            
          </div>
          </>
        )}
      </button>
      </div>
      <div className="pokemon_items_list">
        {pokemonItems &&
          filteredItems.map((item) => (
            <div className="pokemon_item" key={item.id}>
              <img
                src={item.sprite}
                alt={item.name}
                className="pokemon_item_image"
              />
              <ul className="pokemon_item_text">
                <div className="item_title_div">
                  <li key={item.name} className="pokemon_item_name">
                    {item.name}
                  </li>
                  <li
                    key={item.flavorText}
                    className="pokemon_item_description"
                  >
                    {item.flavorText}
                  </li>
                </div>
                <div className="item_price_div">
                  <li className="item_price">
                    $ : {item.cost}
                    <p className="item_price_discount">-15%</p>
                  </li>
                  <button className="item_cart" onClick={() => addToCart(item)}>
                    +<IoCart size={40} />
                  </button>
                </div>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Store;
