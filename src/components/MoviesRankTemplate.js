/**
 * File: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard\src\components\MoviesRankTemplate.js
 * Project: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard
 * Created Date: Wednesday, September 28th 2022, 5:04:15 pm
 * Author: Lisi Lei
 * -----
 * Last Modified: 
 * Modified By: 
 * -----
 * Copyright (c) 2022 Lisi Lei
 * ------------------------------------
 * Javascript will save your soul!
 */



import React, { useState, useEffect } from 'react';
import './PopularMovies.css';
import Pagination from './pagination/Pagination';

const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

export default function MoviesRankTemplate(props) {
    const MOVIE_URL = props.MOVIE_URL
    const MAX_PAGE = props.MAX_PAGE

    const [isLoading, setIsLoading] = useState(true)    // check if data is finished loading, if it is, then replace <div>Loading...</div> with Pagination
    const [movies, setMovies] = useState([]);           // store the first page of the website's popular movies
    const [totalPageCount, setTotalPageCount] = useState(0); // total pages
    const [currentPage, setCurrentPage] = useState(1);  // current page number
    const [currentData, setCurrentData] = useState([]); // store the current page movies data
    const [PageSize, setPageSize] = useState(0);        // store number of movies per page
    const [images, setImages] = useState({});             // store image data

    var style = {};


    useEffect(() => {
        fetch(MOVIE_URL + currentPage)
            .then((res) => res.json())
            .then(data => {
                setMovies(data);
                setIsLoading(false);
                setTotalPageCount(Math.min(MAX_PAGE, data['total_pages']));
                setImages([]);
                setPageSize(data['results'].length);
                for (let i = 0; i < data['results'].length; i++) {
                    fetch(IMAGE_URL + data['results'][i]['poster_path'])
                        .then((res) => res.blob())
                        .then(blob => {
                            let objectURL = URL.createObjectURL(blob);
                            setImages(images => ({ ...images, [data['results'][i]['title']]: objectURL }));
                        })

                }
            })
    }, [currentPage, PageSize, MOVIE_URL, MAX_PAGE])


    useEffect(() => {
        setCurrentData(!isLoading ? function () {
            // the URL already split the movies into 20 per page, so:
            let length = movies['results'].length;
            let start = 0;
            let end = length; // array starts with position 0, and slice end is exclusive

            if (start > length) {
                return [];
            }

            if (end > length) {
                end = length;
            }

            return movies['results'].slice(start, end);
        } : [])
    }, [currentPage, PageSize, movies, isLoading]);

    var bg=require('../images/joker.webp')
    if (!isLoading) {
        style = {
            // background: "url(" + images[movies['results'][0]['title']] + ") no-repeat center center fixed",//  0 0 / contain no-repeat
            background: "url(" + bg + ") no-repeat fixed"
        }
    }
    return (
        <>
            {!isLoading > 0 ?
                <div>
                    {'dates' in movies ? <h2>Dates from <h1 style={{ display: 'inline-block' }}>{movies['dates']['minimum']}</h1> to <h1 style={{ display: 'inline-block' }}>{movies['dates']['maximum']}</h1></h2> : <></>}
                    <div className="movies-rank">
                        <table>
                            <tbody>
                                {currentData.map((value, index) => {
                                    return (
                                        <tr
                                            key={(currentPage - 1) * 20 + index + 1}
                                            className={(currentPage - 1) * 20 + index + 1 === 1 ? 'first-rank' : 'other-rank'}
                                        >
                                            <td className="poster" ><img src={images[value['title']]} alt={value['poster_path']} /> </td>
                                            <td className='rank-text'><span className='rank-num'>{(currentPage - 1) * 20 + index + 1}</span>. {value['title']}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                    </div>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={totalPageCount}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
                :
                <div>Loading...</div>
            }

            {/* {Object.keys(movies).map((key, index) => {
          return (
            <>
              <div>Key is {key},type of key is {typeof movies[key]}</div>
              <div>{typeof movies[key] === 'object' &  movies[key] !== null ? 'aa' : movies[key]}</div>
              <div>{Object.prototype.toString.call(movies[key]) === '[object Array]'? movies[key].map((value, index) =>{return <div>{value}</div>}) : movies[key]}</div>
            </>
          )
        })} */}
        </>
    )
}
