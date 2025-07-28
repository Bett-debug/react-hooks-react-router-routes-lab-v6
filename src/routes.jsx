import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import MovieCard from "./pages/MovieCard";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import Movie from "./pages/Movie";




const routes = [
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/directors" element={<Directors />} />
    <Route path="/actors" element={<Actors />} /> 
    <Route path="/movies/:title" element={<MovieCard />} />
    <Route path="*" element={<ErrorPage />} />
    <Route path="/navbar" element={<NavBar />} />
    <Route path="/movies" element={<Movie />} />

  </Routes>
  

]
;

export default routes;