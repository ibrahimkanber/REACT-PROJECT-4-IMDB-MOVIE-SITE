import React from 'react'
import { Switch, Route } from "react-router-dom";
import App from './App';
import { Favorites } from '../components/Favorites/Favorites';
import { MovieDetail } from '../components/MovieDetail/MovieDetail';
import { Navbar } from '../components/Navbar/Navbar.js';
import "../../src/App.css"



console.log(process.env.REACT_APP_DENEME)
console.log(process.env)

export const Router = () => {
    return (
        <div className="router">
            <Navbar/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/movie/:movieDetail" component={MovieDetail} />
            </Switch>
        </div>
    )
}
