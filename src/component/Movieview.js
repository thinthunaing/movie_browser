import React, { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

export default function Movieview(){
    const {id} =useParams();
    const [movieDetail,setMoviedetail]= useState({});
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        console.log('make an api request');
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`)
        .then(response=>response.json())
        .then(data=> {
            setMoviedetail(data);
            setIsLoading(false);}
             )
    },[id]);

    function renderMovieDetails(){
        if(isLoading){
            return <Hero name='Loading...'/>
        }
        if(movieDetail){
            const poster_path= `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`;
            const backdropUrl= `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`
            return (
                <>
                    <Hero name={movieDetail.original_title} backdrop={backdropUrl}/>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={poster_path} alt='..' className="img-fluid shadow rounded"/>
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetail.original_title}</h2>
                                <h4>Rating:  {movieDetail.imdb_id}</h4>
                                <p className="lead">
                                    {movieDetail.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )
            
        }
    }
    return(
        <>
        {renderMovieDetails()}
        </>
)}