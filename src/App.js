import React, { useEffect, useState } from 'react'
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
const api_url = `http://www.omdbapi.com/?apikey=c032e2d7`

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearch] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${api_url}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('avengers');
    }, []);
    return (
        <div className='app'>
            <h1> MovieLand</h1>
            <div className='search'>
                <input
                    type='text'
                    placeholder='Search'
                    value={searchTerm}
                    onChange={(e) => { setSearch(e.target.value)}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { searchMovies(searchTerm); }}
                />
            </div>
            {
                movies.length > 0 ?
                    (<div className='container'>
                        {movies.map((movie) =>
                            <MovieCard movie1={movie} />)}
                    </div>) :
                    (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
            }



        </div>
    )
}

export default App