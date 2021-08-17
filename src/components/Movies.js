import MovieCard from './MovieCard';

function Movies({ movieData }) {
    return (
        <div className="movies-container">
           {movieData.map((oneMovie, i) => <MovieCard movieObj={oneMovie} />)}
        </div>
    )
}

export default Movies;
