import { useEffect,useState } from 'react';
import './Content.css';

function Content({movies}){
    const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
    const IMG_PATH = 'https://image.tmdb.org/t/p/w300';
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setData(data.results))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const display_data = movies && movies.length > 0 ? movies : data;

    return(
        <div className='content'>
            {display_data.map((movie) => (
                <div key={movie.id} className="movie">
                    <img src={IMG_PATH + movie.poster_path} alt="" />
                    <div className="movie-info">
                        <h3>{movie.original_title}</h3>
                        <span
                            className={
                                movie.vote_average >= 8 ? 'green'
                                : movie.vote_average >= 5 ? 'orange'
                               : 'red'
                            }
                        >{movie.vote_average}</span>
                    </div>
                    <div className='movie-overview'>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Content