import React, { useState } from "react";
import images from "../images/pikachu.png";
import pokeball from "../images/pokeball.png";
import "./styles.css";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import MenuMobile from "../menuMobile";

function NavBar() {
const[sidebar,setSideBar] = useState(false)
const showSideBar = () => setSideBar(!sidebar)
  
  return (
    <>
    <div className="navbar">
      <div className="navbarLogo">
        <div className="Logo">
          <img alt="pikachu" src={images} className="Pikachu" />
        </div>
        <p className="navbarText">
          P
          <img className="pokeball" src={pokeball} alt="icone de pokebola" />
          keApi
        </p>
      </div>
      <div>
        <Link to="/">
          <img
            src={pokeball}
            className="pokeball_mobile"
            alt="logo de pokebola"
          />
        </Link>

        <ul className="list">
          <Link className="listItem" to="/">
            Pokedex
          </Link>
          <Link className="listItem" to="/">
            Curiosidades
          </Link>
          <Link className="listItem" to="/tvshowpage">
            Tv Show
          </Link>
          <Link className="listItem" to="/">
            Store
          </Link>
        </ul>
      
      </div>
      <div className="hamburger_menu">
    <HiOutlineMenu onClick={showSideBar} size={50} cursor="pointer"/>
    {sidebar&& <MenuMobile active={setSideBar}/>}
    </div>
    </div>
    </>
  );
}

export default NavBar;
