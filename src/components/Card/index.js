import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { actions } from "../../redux/actions/actions"
import { Link } from "react-router-dom";
import { StyledCardWrapper, StyledImgWrapper, StyledFooterWrapper} from './Card.style';
import defaultImg from "../../default.jpg"


const styleAddButton={
    color: "white",
    backgroundColor: "rgba(19,85,124,0.8)",
    borderColor: "rgb(145, 86, 168)",
    padding: "3px",
    borderRadius: "5px",
    borderWidth: "3px ",
    
}

export const Card = ({ movie }) => {

    const imgUrl = "https://image.tmdb.org/t/p/w1280/" + movie.poster_path

    return (

        <StyledCardWrapper>
           
            <p>{movie.title}</p>
            <StyledImgWrapper src={movie.poster_path ? imgUrl:defaultImg}/>
                <StyledFooterWrapper>
                    <button style={styleAddButton}>Add To Fav</button>
                    <Link to={{
                        pathname: `/movie/${movie.title}`,
                        state: { ...movie }
                    }}>
                        <button type="">Go To Detail {">>>"}</button>
                    </Link>
                
                </StyledFooterWrapper>
        </StyledCardWrapper>
    )
}


/* const actionTrigger=()=>dispatch(actions(movie.title)) */


