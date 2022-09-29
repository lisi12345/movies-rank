/**
 * File: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard\src\layout\Searchbar.js
 * Project: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard
 * Created Date: Tuesday, September 27th 2022, 12:28:05 pm
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
import './Searchbar.css';

export default function Searchbar(){
    return (
        <div className="search">
            <input
                type='text'
                placeholder="Search..."
                className="search_input"
                // onChange={(event) => {
                //     setSearchTerm(event.target.value)
                // }}
            />

            {/* <div className="search_content">
                {Object.keys(kwmap).filter((val) => {
                    // console.log(val)
                    if (searchTerm === "") {
                        return val
                    } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    } else {
                        return ''
                    }
                }).map((key, index) => {
                    return (
                        kwmap[key].map((val, index) => {
                            return (
                                <p key={index} className='search_item'><a href={val[1]}>{key}: {val[0]}</a></p>
                            )
                        })
                    )
                })}
            </div> */}
        </div>

    )
}