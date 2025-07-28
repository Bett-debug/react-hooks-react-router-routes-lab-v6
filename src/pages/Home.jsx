
import "./Home.css";
import MovieCard from "./MovieCard";
import NavBar from "../components/NavBar";



function Home() 


  
{
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Welcome to Movie App</h1>
        
      </header>
      <main>
        {/* Info goes here! */}
        <div className="movie-list">
          {getMovies().map((movie) => (
            <MovieCard key={movie.id} title={movie.title} />
          ))}

        </div>  
      </main>
    </>
  );
};

export default Home;
