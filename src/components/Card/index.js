import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { StyledCardWrapper, StyledImgWrapper, StyledFooterWrapper, StyledTitleWrapper } from './Card.style';
import defaultImg from "../../default.jpg"
import { auth, db } from '../../firebase/fbconfig'

const styleAddButton = {
    color: "white",
    backgroundColor: "rgba(19,85,124,0.8)",
    borderColor: "rgb(145, 86, 168)",
    padding: "7px",
    borderRadius: "5px",
    borderWidth: "3px ",
    fontSize: "1rem"

}


const favArray = []
export const Card = ({ movie }) => {

    const [flag, setFlag] = useState(false)

    const fav = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        overview: movie.overview
    }

    const addFirestore = () => {

        if (favArray.indexOf(movie.title) < 0) {
            console.log(favArray)
            favArray.push(movie.title)
            db.collection("favoriteMovies").add(fav)
        }

    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setFlag(true)
            } else {
                setFlag(false)
            }
        })
    }, [])

    const divEl = flag ? (<button style={styleAddButton} onClick={addFirestore}>Add To Fav</button>) : null;

    const imgUrl = "https://image.tmdb.org/t/p/w1280/" + movie.poster_path

    return (

        <StyledCardWrapper>

            <StyledTitleWrapper>{movie.title}</StyledTitleWrapper>
            <StyledImgWrapper src={movie.poster_path ? imgUrl : defaultImg} />
            <StyledFooterWrapper style={{ justifyContent: flag ? 'space-between' : 'center' }}>
                {
                    divEl
                }
                <Link to={{
                    pathname: `/movie/${movie.title}`,
                    state: { ...movie }
                }}>
                    <button type="" style={styleAddButton}>Details {">>>"}</button>
                </Link>

            </StyledFooterWrapper>
        </StyledCardWrapper>
    )
}


