/**
 * File: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard\src\components\MostRecent.js
 * Project: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard
 * Created Date: Thursday, September 29th 2022, 9:17:54 am
 * Author: Lisi Lei
 * -----
 * Last Modified: 
 * Modified By: 
 * -----
 * Copyright (c) 2022 Lisi Lei
 * ------------------------------------
 * Javascript will save your soul!
 */


import React, { useEffect, useState } from "react";
import './MostRecent.css';

const LATEST_URL = "https://api.themoviedb.org/3/movie/latest?api_key=dd39fa590a48f02d943c06ad789ccc6c&language=en-US";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

export default function MostRecent() {
    const [isLoading, setIsLoading] = useState(true)    // check if data is finished loading, if it is, then replace <div>Loading...</div> with Pagination
    const [movies, setMovies] = useState([]);           // store the first page of the website's popular movies
    const [image, setImage] = useState();

    useEffect(() => {
        fetch(LATEST_URL)
            .then((res) => res.json())
            .then(data => {
                setMovies(data);
                setIsLoading(false);
                if ('poster_path' in data && data['poster_path'] !== null) {
                    fetch(IMAGE_URL + data['poster_path'])
                        .then((res) => res.blob())
                        .then(blob => {
                            let objectURL = URL.createObjectURL(blob);
                            setImage(objectURL);
                        })
                }

            })
    }, [])
    return (
        <>
            <div className='movies-rank'>
                <h2>{movies['title']}</h2>
                <div className="movie-poster">{image ? <img src={image} alt={movies['poster_path']} /> : <p>Image is not available at this time</p>}</div>
                <div className='movie-info'>
                    {Object.keys(movies).map((key, index) => {
                        if (key !== 'title') {
                            let text = movies[key];
                            if (typeof text === 'boolean') {
                                text = text ? 'True' : 'False';
                            } else if (Array.isArray(text)) {
                                text = text.join()
                            }

                            if (text === null || text === '') {
                                text = 'N/A';
                            }
                            return (
                                <>
                                    <p key={index}>{key}:</p>
                                    <p>{text === null && typeof text === 'object' ? 'N/A' : text}</p>
                                </>
                            )
                        } else {
                            return <></>
                        }

                    })}

                </div>
            </div>
        </>
    )
}