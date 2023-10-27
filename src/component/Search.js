import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";


export function MovieCard({movie}){
    const posterUrl= `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const detailUrl=`/movie/${movie.id}`
    return(
        <div className="col-lg-3 col-md-3 col-2 my-3">
            <div className="card" style={{width: '18rem'}}>
  <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to={detailUrl} className="btn btn-primary">show details</Link>
  </div>
</div>
        </div>
        
    )
}

export default function Search({searchText,searchResults}){
    const title=`We are searching for ${searchText}`;

    const resultHtml = searchResults.filter(obj=>(obj.poster_path&&obj.original_title)).map((obj,i) =>{
        return <MovieCard movie={obj} key={i}/>
    })

    if(resultHtml.length===0){
        return(
            <>
                <Hero name={title}/>
                <h3 style={{textAlign:"center"}}>Not Available</h3>
            </>
            
        )
    }

    return(

        <>
        <Hero name={title}/>
        {resultHtml && <div className="row">
            {resultHtml}</div>}
        </>
    )
}