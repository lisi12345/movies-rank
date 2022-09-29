/**
 * File: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard\src\components\NowPlaying.js
 * Project: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard
 * Created Date: Thursday, September 29th 2022, 10:11:05 am
 * Author: Lisi Lei
 * -----
 * Last Modified: 
 * Modified By: 
 * -----
 * Copyright (c) 2022 Lisi Lei
 * ------------------------------------
 * Javascript will save your soul!
 */


import React from 'react';
import MoviesRankTemplate from './MoviesRankTemplate';

export default function NowPlaying() {
    const NOW_PLAYING_URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=dd39fa590a48f02d943c06ad789ccc6c&language=en-US&page="
    const MAX_PAGE = 500 // defined by the url

    return (
        <>
            <MoviesRankTemplate MOVIE_URL={NOW_PLAYING_URL} MAX_PAGE={MAX_PAGE} />
        </>
    )
}
