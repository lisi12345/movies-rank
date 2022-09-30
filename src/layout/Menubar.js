/**
 * File: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard\src\layout\Menubar.js
 * Project: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard
 * Created Date: Tuesday, September 27th 2022, 1:16:35 pm
 * Author: Lisi Lei
 * -----
 * Last Modified: 
 * Modified By: 
 * -----
 * Copyright (c) 2022 Lisi Lei
 * ------------------------------------
 * Javascript will save your soul!
 */


import React, { useRef, useState } from 'react';
import './Menubar.css'

import PopularMovies from '../components/PopularMovies';
import MostRecent from '../components/MostRecent';
import NowPlaying from '../components/NowPlaying';
import TopRated from '../components/TopRated';

export default function Menubar() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const [content, setContent] = useState(<PopularMovies />)

    const content_dict = {
        "most-popular": <PopularMovies />,
        "most-recent": <MostRecent />,
        "now-playing": <NowPlaying />,
        "top-rated": <TopRated />
    }


    const changeMenuStyle = (ref) => {
        // add className to selected menu item
        let tag = ref.current;
        tag.className = "menu-selected";
        //update content
        setContent(content_dict[ref.current.id]);
        // remove className from unselected menu item
        switch (ref) {
            case ref1:
                ref2.current.className = "";
                ref3.current.className = "";
                ref4.current.className = "";
                ref5.current.className = "";
                break;
            case ref2:
                ref1.current.className = "";
                ref3.current.className = "";
                ref4.current.className = "";
                ref5.current.className = "";
                break;
            case ref3:
                ref1.current.className = "";
                ref2.current.className = "";
                ref4.current.className = "";
                ref5.current.className = "";
                break;
            case ref4:
                ref1.current.className = "";
                ref2.current.className = "";
                ref3.current.className = "";
                ref5.current.className = "";
                break;
            case ref5:
                ref1.current.className = "";
                ref2.current.className = "";
                ref3.current.className = "";
                ref4.current.className = "";
                break;
            default:
                break;
        }

    }
    return (
        <>
            <div className='menu-bar'>
                <button onClick={() => changeMenuStyle(ref1)} ref={ref1} id="most-popular" className='menu-selected'>Most Popular</button>
                {/* <span>/</span> */}
                <button onClick={() => changeMenuStyle(ref3)} ref={ref3} id="now-playing">Now Playing</button>
                {/* <span>/</span> */}
                <button onClick={() => changeMenuStyle(ref5)} ref={ref5} id="top-rated">Top Rated</button>
                {/* <span>/</span> */}
                <button onClick={() => changeMenuStyle(ref2)} ref={ref2} id="most-recent">Most Recent</button>
                {/* <span>/</span> */}
                <button onClick={() => changeMenuStyle(ref4)} ref={ref4} id="search-page">Search</button>
            </div>
            <div className='content'>
                {content}
            </div>
        </>
    )
}