import { useEffect } from 'react';
import NavSort from '../components/NavSort';
import Movies from '../components/Movies';
import { API_TOKEN} from '../globals/globals';

function PageHome({ sort }) {

    // https://api.themoviedb.org/3/movie/popular?api_key=123&language=en-US&page=1

    useEffect(() => {

        const fetchMovies = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?&language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });
            let rawMovieData = await res.json();
            rawMovieData = rawMovieData.results.splice(0, 12);
            console.log(rawMovieData);

        }

        fetchMovies();


    }, [sort]);


    return (
        <section className="home-page">
            <NavSort />
            <Movies />
        </section>
    )
}

export default PageHome;
