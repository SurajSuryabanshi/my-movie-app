import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL='http://www.omdbapi.com?apikey=5bb19f71'


const App=()=>{

    const [movies, setMovies]=useState([]);
    const [searchTerm, setSearchTerm]=useState([]);

    const searchMovies=async(title)=> {
        const repsonse=await fetch(`${API_URL}&s=${title}`);
        const data =await repsonse.json();

        setMovies(data.Search);
    }

    useEffect(() =>{
        searchMovies('Superman');

    }, []);


    return (
        <div className="app">
            <h1>My Movie App</h1>

            <div className="search">
                <input
                  placeholder="Search for Movies"
                  value={searchTerm}
                  onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img 
                  src={SearchIcon}
                  alt="Search"
                  onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            {movies?.length >0
                ?(
                    <div className="container">
                        {movies.map((movie) =>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;