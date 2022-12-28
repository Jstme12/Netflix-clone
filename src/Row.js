import React,{ useState,useEffect } from 'react';
import axios from './axios';
import './Row.css';
const base_url="https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl,isLargeRow}){
    const [movies, setMovies]=useState([]);
    //this code runs on a specific condition
    useEffect(()=>{
  //this function  makes the row load once and then depend on the variable such as movies
  async function fetchData(){
    const request=await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
    
  }
  fetchData();
    },[fetchUrl]);
 console.log(movies);
    return(
        <div className="row">
           <h2>{title}</h2>
           <div className="row_posters">
            {/*Rows of posters here*/}
            {movies.map(movie=>(
               <img
               key={movie.id}/*sets a unique value to posters so that when rendered react renders only required thing*/
               className={`row_poster ${isLargeRow && "row_posterLarge"}`}
               src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>))}
            
           </div>

        </div>
    )
}

export default Row