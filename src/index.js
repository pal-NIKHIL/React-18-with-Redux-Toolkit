import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function alertmessage()
{
    return alert("PAYMENT DONE")
}
const moviedata = [
    {
        poster: "https://i.pinimg.com/originals/18/57/b1/1857b137d5435e0da29a2410d4935b21.jpg",
        name: "JADOO",
        id:"1"
    },
    {
        poster: "https://images.squarespace-cdn.com/content/v1/5a608e4e017db2e8dedb242b/1614669829730-HVBQPR6LNS5QEKE2JM6N/IMG_1399.jpg",
        name: "HUM",
        id:"2"
    },
    {
        poster: "https://i.tribune.com.pk/media/images/1277601-dangal-1482925425/1277601-dangal-1482925425.jpg",
        name: "DANGAL",
        id:"3"
    }
]

const MovieList = () => {
    return (
        <div className="main">
                <h1>Top 10 Movie of all time</h1>
                <div className="container">
                    {moviedata.map((movie) => {
                        return <Movie {...movie} key={movie.id}></Movie>

                    })
                    }
                </div>
            <EventExample/>
        </div>
    );
};
const Movie = ({name, poster}) => {
    return (
        <article className="book">
            <img src={poster}></img>
            <h1> {name} </h1>
        </article>
    );
};
const EventExample = ()=>{
    const totalamount = (e)=>{
        e.preventDefault()
        console.log(e)

    }
    return <div>
        <form onSubmit={totalamount}>
            <h1>Quantity</h1>
            <input type='text' name="data" id="quantity"/>
            <button>$ 10.55 </button>
        </form>
    </div>
}

const data = ReactDOM.createRoot(document.getElementById("root"));
data.render(<MovieList/>);
