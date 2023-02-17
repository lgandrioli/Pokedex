import React, { useState, useEffect } from "react";
import "./styles.css";



function PokemonCuriositiesPage() {
  const [curiosities, setCuriosities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/curiosities")
      .then((response) => response.json())
      .then((data) => setCuriosities(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="body_background">
      <div className="body">
        <h1 className="curiosities_title">
          Curiosities about the pokemon World
        </h1>
        <ul className="curiosities_list">
          {curiosities.map((curiosity) => (
            <li className="curiosities_item" key={curiosity.id}>
              <img
                src={curiosity.image}
                alt={curiosity.title}
                className="curiosities_img"
              />
              <div className="curiosities_item-description">
                <h2>{curiosity.title}</h2>
                <p>{curiosity.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonCuriositiesPage;
