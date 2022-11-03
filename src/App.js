import React, { useEffect,useState } from 'react';
import MovieCard from './components/MovieCard';
import './App.css';
// API_KEY: 7be47bd6
import searchIcon from './search.svg';
const API_URL = 'https://www.omdbapi.com/?apikey=7be47bd6';


function App() {

    const [movies, setMovies] = useState([]);
    const [searchTerm,setSearchTerm]=useState('')
    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
  useEffect(() => {
    searchMovies('Iron man');
  }, [])
    
  return (
    <div className='app'>
        <h1>Movie Adda</h1>

        <div className='search'>
            <input type="text"
                placeholder='Seach for movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img 
            src={searchIcon} 
            alt="search"
            onClick={()=> searchMovies(searchTerm) } 
            />
        </div>
        {
            movies?.length > 0
            ? (
                <div className='container'>
                    {movies.map((movie)=>(
                       <MovieCard movie1={movie}/> 
                    ))}   
                </div>
            )
            : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )
        }
        
    </div>
  )
}

export default App;