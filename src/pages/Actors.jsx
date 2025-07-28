// import { useEffect, useState } from "react";
//  import "./Actors.css";
// import NavBar from "../components/NavBar";
//  import { getActors } from "../services/actorService";


// function Actors() {
//   return (
//     <>
//       <header>
//         {/* What component should go here? */}
//         <NavBar/>
//         <h1>Actors Page</h1>

//       </header>
//       <main>
//         {/* Actor info here! */}
//         <div>
//           {getActors().map((actor, index) => (
//             <article key={index}>
//               <h2>{actor.name}</h2>
//               <ul>
//                 {actor.movies.map((movie, movieIndex) => (
//                   <li key={movieIndex}>{movie}</li>
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </div>
//       </main>
//     </>
//   );
// };

// export default Actors;



import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch actors");
        }
        return res.json();
      })
      .then(setActors)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Actors</h1>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <strong>{actor.name}</strong> — {actor.movies.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Actors;
