/**
 * File: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard\src\components\Pagination.js
 * Project: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard
 * Created Date: Tuesday, September 27th 2022, 4:11:05 pm
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
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import './Pagination.scss';

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };


    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul className={classnames('pagination-container', { [className]: className })}>
            {/* Left navigation arrow */}
            <li
                className={classnames('pagination-item', { disabled: currentPage === 1 })}
                onClick={onPrevious}
                key='arrow-left'
            >
                <div className="arrow left" />
            </li>

            {/* middle page content */}
            {paginationRange.map(pageNumber => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots" key={'dots'+pageNumber}>&#8230;</li>;
                }

                // Render our Page Pills
                return (
                    <li
                        className={classnames('pagination-item', { currentPage })}
                        onClick={() => onPageChange(pageNumber)}
                        key={'page'+pageNumber}
                    >
                        {pageNumber}
                    </li>
                );
            })}

            {/*  Right Navigation arrow */}
            <li
                className={classnames('pagination-item', { disabled: currentPage === lastPage })}
                onClick={onNext}
                key='arrow-right'
            >
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default Pagination;