import React  from "react";
import images from "../images/pikachu.png";
import pokeball from "../images/pokeball.png";
import "./styles.css";
import { Link } from "react-router-dom";

function NavBar () {
    return (
      <div className="navbar">
        <div className="navbarLogo">
          <div className="Logo">
        <img alt="aaa" src={images} className="Pikachu" />
        </div>
       <p className="navbarText">P
        <img className="pokeball" src={pokeball} alt='icone de pokebola'/>keApi</p>
        </div>
        <div>
          <ul className="list">
           
           <Link className="listItem" to="/">Pokedéx</Link>
           <Link className="listItem" to="/">Curiosidades</Link>
           <Link className="listItem" to='/tvshowpage'>Tv show</Link>
           <Link className="listItem" to="/">Store</Link>
          </ul>
        </div>
      </div>
    );
}

export default NavBar;
