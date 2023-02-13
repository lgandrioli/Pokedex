import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import TvShowPage from './pages/tvshow';
import Pokedex from './pages/Pokedex';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<NavBar/>
<Routes>
<Route exact path="/tvshowpage" element={<TvShowPage />} />
<Route exact path="/" element={<Pokedex />} />
  </Routes></BrowserRouter>
  </React.StrictMode>
);

