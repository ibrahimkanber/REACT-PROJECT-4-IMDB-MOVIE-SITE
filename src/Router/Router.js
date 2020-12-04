import React, { useEffect, useState, createContext, useReducer } from 'react'

import axios from 'axios';

import { Switch, Route } from "react-router-dom";

import { Favorites } from '../components/Favorites/Favorites';
import { MovieDetail } from '../components/MovieDetail/MovieDetail';
import { Navbar } from '../components/Navbar/Navbar.js';
import "../../src/App.css"
import { SignUp } from '../components/SignUp/SignUp'
import { Login } from '../components/Login/Login'
import { CardList } from '../components/CardList';


require("dotenv").config()
const apiKey = process.env.REACT_APP_API_KEY


const baseUrl = "https://api.themoviedb.org/3/search/movie";

export const MovieContex = createContext()



export const Router = () => {
    //////////////////////////////////

    const [searchedValue, setSearchedValue] = useState("Star Wars")
    const [movieList, setMovieList] = useState("")


    const fetchMovies = (pageNum = 1) => {
        axios.get(baseUrl, {
            params: {
                api_key: apiKey,
                page: pageNum,
                query: searchedValue
            }
        }).then(({ data: { results } }) => setMovieList(results))

    }

    useEffect(() => {
        fetchMovies()
    }, [searchedValue])

    ///////////////////////////////////
    return (
        <div className="router">
            <MovieContex.Provider value={{ movieList, setSearchedValue, fetchMovies }}>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={CardList} />
                    <Route exact path="/favorites" component={Favorites} />
                    <Route exact path="/movie/:moviename" component={MovieDetail} />
                </Switch>
            </MovieContex.Provider>
        </div>
    )
}
