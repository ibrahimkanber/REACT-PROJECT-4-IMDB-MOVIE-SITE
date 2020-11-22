import React, { useEffect, useState, createContext ,useReducer} from 'react'
import { CardList } from '../components/CardList/index.js';
import axios from 'axios';
import { FavoriteContex } from '../contex/Contex.js';
import { movieReducer } from '../contex/favoriteReducer.js';
import {db,auth} from "../firebase/fbconfig"

require("dotenv").config()
const apiKey=process.env.REACT_APP_API_KEY

/* const apiKey = "2ab876e9698659187d8d9420ef4d232c"; //temporary */
const baseUrl = "https://api.themoviedb.org/3/search/movie";

/* db.collection("favoriteMovies").add({name:"matrix"})

auth.signInWithEmailAndPassword("ibrahim@gmail.com","123456")
auth.createUserWithEmailAndPassword("ibrahim2@gmail.com","1234567") */

/* console.log(auth) */
export const MovieContex = createContext()
 
function App() {
  
 
  
  const [searchedValue, setSearchedValue] = useState("Star Wars")
  const [movieList, setMovieList] = useState("")
  ////
  const initialState={
    favorites:[]
  }

  const [state,dispatch]=useReducer(movieReducer,initialState)

 
  ///
  const fetchMovies = (pageNum = 1) => {
    axios.get(baseUrl, {
      params: {
        api_key: apiKey,
        page: pageNum,
        query: searchedValue//TODO: from input
      }
    }).then(({ data: { results } }) => setMovieList(results))


  }

  useEffect(() => {

    fetchMovies()
  }, [searchedValue])

  useEffect(()=>{},[])


  return (
    <div className="App">
      <MovieContex.Provider value={{ movieList, setSearchedValue, fetchMovies }}>
        <FavoriteContex.Provider value={dispatch}>
          <CardList />
        </FavoriteContex.Provider>
      </MovieContex.Provider>

    </div>
  );
}

export default App;
