/**
 * File: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard\src\components\ConnectAPI.js
 * Project: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard
 * Created Date: Friday, August 12th 2022, 3:57:24 pm
 * Author: Lisi Lei
 * -----
 * Last Modified: 
 * Modified By: 
 * -----
 * Copyright (c) 2022 Lisi Lei
 * ------------------------------------
 * Javascript will save your soul!
 * 
 * API source: https://developers.themoviedb.org/3/getting-started/introduction
 * my API key: dd39fa590a48f02d943c06ad789ccc6c
 */


import React from 'react';
import MoviesRankTemplate from './MoviesRankTemplate';

// const API_URL = "https://api.themoviedb.org/3/movie/550?api_key=dd39fa590a48f02d943c06ad789ccc6c";
const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?api_key=dd39fa590a48f02d943c06ad789ccc6c&language=en-US&page=";

function PopularMovies() {
  // const [isLoading, setIsLoading] = useState(true)    // check if data is finished loading, if it is, then replace <div>Loading...</div> with Pagination
  // const [movies, setMovies] = useState([]);           // store the first page of the website's popular movies
  // const [totalPageCount, setTotalPageCount] = useState(0); // total pages
  // const [currentPage, setCurrentPage] = useState(1);  // current page number
  // const [currentData, setCurrentData] = useState([]); // store the current page movies data
  // const [PageSize, setPageSize] = useState(0);        // store number of movies per page
  // const [images, setImages] = useState({});             // store image data

  const MAX_PAGE = 500 // defined by the url


  // useEffect(() => {
  //   fetch(POPULAR_URL + currentPage)
  //     .then((res) => res.json())
  //     .then(data => {
  //       setMovies(data);
  //       setIsLoading(false);
  //       setPageSize(data['results'].length);
  //       setTotalPageCount(Math.min(MAX_PAGE * PageSize, data['total_pages']));
  //       setImages([]);
  //       for (let i = 0; i < data['results'].length; i++) {
  //         fetch(IMAGE_URL + data['results'][i]['poster_path'])
  //           .then((res) => res.blob())
  //           .then(blob => {
  //             let objectURL = URL.createObjectURL(blob);
  //             setImages(images => ({ ...images, [data['results'][i]['title']]: objectURL }));
  //           })

  //       }
  //     })
  // }, [currentPage, PageSize])


  // useEffect(() => {
  //   setCurrentData(!isLoading ? function () {
  //     // the URL already split the movies into 20 per page, so:
  //     let length = movies['results'].length;
  //     let start = 0;
  //     let end = length; // array starts with position 0, and slice end is exclusive

  //     if (start > length) {
  //       return [];
  //     }

  //     if (end > length) {
  //       end = length;
  //     }

  //     return movies['results'].slice(start, end);
  //   } : [])
  // }, [currentPage, PageSize, movies, isLoading]);

  return (
    <>
      <MoviesRankTemplate MOVIE_URL={POPULAR_URL} MAX_PAGE={MAX_PAGE} />
    </>
  )
}

export default PopularMovies