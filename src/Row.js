import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"

function Row({ title, fetchUrl, isLargeRow = false }) {

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        (async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        })()
    }, [fetchUrl])

    return (
        <div className={"Row"}>
            <h2 className={"row__title"}>{title}</h2>
            <div className={`row__posters`}>
                {movies.map(movie => (
                    <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
                ))}
            </div>
        </div>
    )
}

export default Row