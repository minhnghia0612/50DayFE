import { useState } from 'react';
import './Header.css'

function Header({setMovie}){
    const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';
    const [query, setQuery] = useState('');

    const handleSearch = () =>{
        if(query.trim() === "") return;

        fetch(API_SEARCH + query)
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            setMovie(data.results || [])
        })
        .catch((error) => console.error('Error fetching data:', error));
    }

    return(
        <div className='header'>
            <input type="text" 
            placeholder='Search'
            value = {query}
            onChange={ (e) => setQuery(e.target.value) }
            onKeyDown={ (e) => {
                if (e.key === "Enter")
                    {handleSearch()}
                } 
                } />
        </div>
    )
}
export default Header