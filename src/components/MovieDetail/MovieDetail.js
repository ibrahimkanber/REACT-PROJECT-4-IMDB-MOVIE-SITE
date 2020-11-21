import React from 'react';

import { Link } from 'react-router-dom'

/* adult: false
backdrop_path: "/SPkEiZGxq5aHWQ2Zw7AITwSEo2.jpg"
genre_ids: (3) [28, 12, 878]
id: 181812
original_language: "en"
original_title: "Star Wars: The Rise of Skywalker"
overview: "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins."
popularity: 139.123
poster_path: "/db32LaOibwEliAmSL2jjDF6oDdj.jpg"
release_date: "2019-12-18"
title: "Star Wars: The Rise of Skywalker"
video: false
vote_average: 6.6
vote_count: 5865 */

export const MovieDetail = ({ location: { state } }) => {

    console.log(state)
    return (
        <div>
          
            <div style={{ color: "white", display: "flex" }}>
                <div>
                    <p>{state.title}</p>
                    <img src={"https://image.tmdb.org/t/p/w1280/" + state.poster_path} style={{ width: "80%", height: 400 }} />
                    <p>imdb:{state.vote_average}</p>
                </div>
                <div>
                    <p>{state.title}</p>
                    <p>{state.overview}</p>
                    <p>{state.release_date}</p>
                </div>

            </div>
        </div>
    )
}
