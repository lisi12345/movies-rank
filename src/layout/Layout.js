/**
 * File: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard\src\components\Layout.js
 * Project: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard
 * Created Date: Tuesday, September 27th 2022, 11:16:07 am
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
import './Layout.css'
import LogoTitle from './LogoTitle';
import Searchbar from './Searchbar';
import Menubar from './Menubar';

export default function Layout() {
    return (
        <>
            <div className="body1">
                <div className="body2">
                    <div className="header">
                        <LogoTitle title='The Movies' />
                        {/* <Searchbar /> */}
                    </div>
                    <div className='menu'>
                        <Menubar />
                    </div>

                </div>

            </div>
        </>
    )
}