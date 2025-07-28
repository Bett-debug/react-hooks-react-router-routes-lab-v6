import {Link} from 'react-router-dom';
import "./MovieCard.css";



function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title}</h2>

        {/* What should go here? */}
        <Link to={`/movies/${title}`}>
          <button>View Details</button>
        </Link>
    </article>
  );
};

export default MovieCard;