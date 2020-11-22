import React from 'react'
import { Switch, Route } from "react-router-dom";
import App from './App';
import { Favorites } from '../components/Favorites/Favorites';
import { MovieDetail } from '../components/MovieDetail/MovieDetail';
import { Navbar } from '../components/Navbar/Navbar.js';
import "../../src/App.css"
import { SignUp } from '../components/SignUp/SignUp';
import { Login } from '../components/Login/Login';
import { LogOut } from '../components/Logout/LogOut';
import { Example } from '../components/Example/Example';






console.log(process.env.REACT_APP_DENEME)
console.log(process.env)

export const Router = () => {
    return (
        <div className="router">
            <Navbar/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={LogOut} />
                <Route exact path="/movie/:moviename" component={MovieDetail} />
                <Route exact path="/example/:name" component={Example} />
          
            </Switch>
        </div>
    )
}
