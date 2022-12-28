import React,{ useState,useEffect } from 'react'
import axios from './axios';

const base_url="https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl}){
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
               <img src={'${base_url}&[poster_path]'} alt={movie.name}/> 
            ))}
            
           </div>

        </div>
    )
}

export default Row