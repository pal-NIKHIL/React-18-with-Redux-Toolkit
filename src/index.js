import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const movie1={
    poster:"https://i.pinimg.com/originals/18/57/b1/1857b137d5435e0da29a2410d4935b21.jpg",
    name:"JADOO"
}
const movie2={
    poster:"https://images.squarespace-cdn.com/content/v1/5a608e4e017db2e8dedb242b/1614669829730-HVBQPR6LNS5QEKE2JM6N/IMG_1399.jpg",
    name:"HUM"
}
const movie3={
    poster:"https://i.tribune.com.pk/media/images/1277601-dangal-1482925425/1277601-dangal-1482925425.jpg",
    name:"DANGAL"
}
const MovieList = () => {
    return (
        <div className="container">
            <Movie poster={movie1.poster} name={movie1.name}/>
            <Movie poster={movie2.poster} name={movie2.name}/>
            <Movie poster={movie3.poster} name={movie3.name}/>
        </div>
    );
};

const Movie = ({poster,name}) => {
    return (
        <article className="book">
            <img src={poster}></img>
            <h1> {name} </h1>
        </article>
    );
};

const data = ReactDOM.createRoot(document.getElementById("root"));
data.render(<MovieList />);
