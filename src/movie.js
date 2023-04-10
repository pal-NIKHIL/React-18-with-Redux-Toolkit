import React from "react";

 export const Movie = ({name, poster,getmovie,id}) => {
    const data=()=>{
        getmovie(id)
    }
    return (
        <article className="movie">
            <h2>{id}</h2>
            <img src={poster}></img>
            <h1 className="num"> {name} </h1>
            <button onClick={data}>Get movie</button>
        </article>
    );
};