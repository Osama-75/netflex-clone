import { useEffect, useState } from "react";
import axios from 'axios';
import "./Parts.css"
import requests from "../api/Request";
import { useNavigate } from "react-router-dom";
export default function Banner() {
    const [movie, setMovie] = useState([]);
    const nav = useNavigate();
    useEffect(() => {
        async function fetchData() {
            const requ = await axios.get(requests.requestPopular);
                setMovie(requ.data.results[Math.floor(Math.random() * requ.data.results.length-1)]);
                return requ;
        }
        fetchData();
    }, []);
    console.log(movie);
    function descLen(string, n) {
        return string?.length > n ? string.substr(0, n-1) + "..." : string;
    }
    return (
        <header className="banner"
                // style={{
                //     backgroundSize:"cover",
                //     backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                //     backgroundPosition: "center center",
                // }}
        >
            <img
                className='banner-img'
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt={movie?.title}
            />
            <div className="banner-content" >
                <h1 className="banner-title"> {movie?.title}</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button" onClick={() => nav("/savedshows")}>MyList</button>
                </div>
                <h1 className="banner-description"> 
                    {descLen(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner-bottom"/>
        </header>
    );
}