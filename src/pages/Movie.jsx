// import { useParams } from 'react-router-dom';
// import React from 'react';
// import "./Movie.css";

// function Movie({ movies }) {
//   // Get the id from URL parameters
//   const { id } = useParams();
  
//   // Find the movie with matching id
//   const movie = movies.find(movie => movie.id === parseInt(id));

//   // If movie not found, show a message
//   if (!movie) {
//     return <h1>Movie not found</h1>;
//   }

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>Time: {movie.time}</p>
//       <div>
//         {movie.genres.map((genre, index) => (
//           <span key={index}>{genre}</span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Movie;




import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Movie() {



  return (
    <>
      <header>
        {/* What component should go here? */}
      </header>
      <main>
        {/* Movie info here! */}
      </main>
    </>
  );
};

export default Movie;



import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Movie from "../pages/Movie";

test("renders the <NavBar /> component", async () => {
  render(
    <MemoryRouter initialEntries={["/movies"]}>
      <Routes>
        <Route path="/movies" element={<Movie />} />
      </Routes>
    </MemoryRouter>
  );

  const navElement = await screen.findByText("Home"); // assuming NavBar has a Home link
  expect(navElement).toBeInTheDocument();
});
