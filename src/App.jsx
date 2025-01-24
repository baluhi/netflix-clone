/* import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesPage from "./Pages/MoviesPage";
import HomePage from "./Pages/HomePage";
import TvShowsPage from "./Pages/TvShowsPage";
import Footer from "./Components/Footer/Footer";

import React from "react";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moviespage" element={<MoviesPage />} />
          <Route path="/tvshows" element={<TvShowsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
 */

import React from 'react'

const App = () => {
  return (
    <div>
       <EligibilityComponent response={response} />;
    </div>
  )
}

export default App