// import { useEffect, useState } from "react";
// import React from "react";
// import "./Directors.css";
// import NavBar from "../components/NavBar";
// import { getDirectors } from "../services/directorService";



// const directors = getDirectors();



// function Directors() {
//   return (
//     <>
//       <header>
//         {/* What component should go here? */}
//         <NavBar />
//         <h1>Directors Page</h1>
//       </header>
//       <main>
//         {/* Director info here! */}
//         <div>
      
//       {directors.map((director, index) => (
//         <article key={index}>
//           <h2>{director.name}</h2>
//           <ul>
//             {director.movies.map((movie, movieIndex) => (
//               <li key={movieIndex}>{movie}</li>
//             ))}
//           </ul>
//         </article>
//       ))}
//         </div>
        

//       </main>
//     </>
//   );
// };

// export default Directors;



import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch directors");
        }
        return res.json();
      })
      .then(setDirectors)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Directors</h1>
      <ul>
        {directors.map((director) => (
          <li key={director.id}>
            <strong>{director.name}</strong> — {director.movies.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Directors;
