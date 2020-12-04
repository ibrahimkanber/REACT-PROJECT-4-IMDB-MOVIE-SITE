import React, { useContext, useState, useEffect } from 'react'
import { Card } from '../Card';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { Search } from '../Search.js';
import { StyledCardListWrapper, StyledMoviesWrapper } from './CardList.style';
import { MovieContex } from "../../Router/Router"


export const CardList = (props) => {
    const { fetchMovies, movieList } = useContext(MovieContex)

    return (

        <StyledCardListWrapper>

            <StyledMoviesWrapper>
                {
                    movieList && movieList.map((movie, index) => {
                        return (

                            <Card movie={movie} key={index} />

                        )
                    })
                }
            </StyledMoviesWrapper>
            <ReactPaginate
                pageCount={Math.ceil(movieList.length / 3)}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                onPageChange={(data) => fetchMovies(data.selected + 1)}
                containerClassName="pagination"
            />


        </StyledCardListWrapper>

    )
}
