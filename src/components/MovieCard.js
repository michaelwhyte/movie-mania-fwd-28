import { Link } from 'react-router-dom';
import poster from '../images/godzilla-vs-kong-demo-poster';

function MovieCard() {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={poster} alt="Godzilla vs. Kong" />
            </div>
            <div className="movie">
                <h3>Godzilla vs. Kong</h3>
                <Link to="/">More Info</Link>
            </div>
        </div>
    )
}

export default MovieCard
