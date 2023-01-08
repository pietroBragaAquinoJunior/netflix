import "./Banner.css"
import React, {useEffect, useState} from 'react';
import axios from "./axios";
import requests from "./Requests";

function Banner(props) {

    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    },[]);

    console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substring(0,n-1) + '...' : string;
    }

    return (
        <header className={"banner"} style={
            {   backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize : "cover",
                backgroundPosition : "center"
            }
        }>
            <div className={"banner__contents"}>
                <h1 className={"banner__title"}>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className={"banner__buttons"}>
                    <button className={"banner__button"}>Play</button>
                    <button className={"banner__button"}>My List</button>
                </div>
                <p className={"banner__description"}>
                    {truncate(movie?.overview, 150)}
                </p>
            </div>
            <div className={"banner__fadeBottom"}></div>
        </header>
    );
}

export default Banner;