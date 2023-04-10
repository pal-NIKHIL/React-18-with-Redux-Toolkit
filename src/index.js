import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {moviedata} from "./movies";
import {Movie} from "./movie"
function alertmessage()
{
    return alert("PAYMENT DONE")
}

const MovieList = () => {
    function getMovie(index){
       const movie=moviedata.find((data)=>data.id===index)
        console.log(movie)
    }
    return (
        <div className="main">
                <h1>Top 10 Movie of all time</h1>
                <div className="container">
                    {moviedata.map((movie) => {
                        return <Movie {...movie} key={movie.id} getmovie={getMovie}></Movie>

                    })
                    }
                </div>
            {/*<EventExample/>*/}
        </div>
    );
};
const data = ReactDOM.createRoot(document.getElementById("root"));
data.render(<MovieList/>);
