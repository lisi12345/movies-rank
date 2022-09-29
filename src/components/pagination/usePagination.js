/**
 * File: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard\src\components\usePagination.js
 * Project: c:\Users\llei\Documents\projects\others\reactjs\tmdbmovie\test1\movie_dashboard
 * Created Date: Tuesday, September 27th 2022, 3:27:01 pm
 * Author: Lisi Lei
 * -----
 * Last Modified: 
 * Modified By: 
 * -----
 * Copyright (c) 2022 Lisi Lei
 * ------------------------------------
 * Javascript will save your soul!
 */


import React, { useMemo } from 'react';

export const DOTS = "...";

const rangeList = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
}

export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
}) => {
    const paginationRange = useMemo(() => {
        // const totalPageCount = Math.ceil(totalCount / pageSize);
        const totalPageCount = totalCount

        // display page numbers = silbiling + first + last + current + 2*DOTS
        const totalPageNum = siblingCount + 5;

        /**
         * Case 1: if the number of pages is less than the page numbers we want to show
         */
        if (totalPageCount <= totalPageNum) {
            return rangeList(1, totalPageCount);
        }

        // calculate left and right sibling index in [1, totalPageCount] range
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

        // we do not show dots just when there is just one page number to be inserted between the 
        // extremes of sibling and the page limits, i.e 1 and totalPageCount.
        const checkShowLeftDots = leftSiblingIndex > 2;
        const checkShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1
        const lastPageIndex = totalPageCount;

        /**
         * Case 2: no left dots to show, but right dots to be shown
         */
        if (!checkShowLeftDots && checkShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount; //?
            let leftRange = rangeList(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        /**
         * Case 3: no right fits to show, but left dots to be shown
         */
        if (checkShowLeftDots && !checkShowRightDots) {

            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = rangeList(totalPageCount - rightItemCount + 1, totalPageCount);
            return [firstPageIndex, DOTS, ...rightRange];
        }

        /**
         * Case 4: both left and right dots to be shown
         */
        if (checkShowLeftDots && checkShowRightDots) {
            let middleRange = rangeList(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
}