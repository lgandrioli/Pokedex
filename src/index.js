import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TvShowPage from "./pages/tvshow";
import Pokedex from "./pages/Pokedex";
import PokemonCuriositiesPage from "./pages/curiosities";
import Footer from "./components/footer";
import Store from "./pages/store/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/tvshowpage" element={<TvShowPage />} />
        <Route exact path="/" element={<Pokedex />} />
        <Route
          exact
          path="/curiosidades"
          element={<PokemonCuriositiesPage />}
        />
        <Route exact path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
