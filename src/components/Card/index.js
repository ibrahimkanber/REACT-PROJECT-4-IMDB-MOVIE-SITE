import React from 'react'
// import "./Card.style.css"
import styles from "./Card.module.css"
import { StyledCardWrapper, StyledCardWrapper2 } from './Card.style'
import {useSelector,useDispatch} from "react-redux";


const cardStyle = {
    color: 'red',
    backgroundColor: '#dbdbdb',
    fontSize: 15,
    padding: 20,
    border:"1px solid red",
    margin:10
}

export const Card = ({ movie }) => {

    const dispatch=useDispatch()
 

    // const src="https://image.tmdb.org/t/p/w1280/"+movie.poster_path
    return (

        <div style={cardStyle} className="card-wrapper" onClick={() => dispatch({type:"ADD_FAVORITES",payload:movie.title})}>
            <p>{movie.title}</p>
            <p>{movie.overview}</p>
            <p>{movie.vote_average}</p>
            <img src={"https://image.tmdb.org/t/p/w1280/"+movie.poster_path} style={{width:"80%",height:"500px"}}/>


        </div>
    )
}




{/* <div style={cardStyle}>
TEST
<div className={styles.cardWrapper}>
    TEST-1
</div>
<StyledCardWrapper>
    <p>Styled component</p>
</StyledCardWrapper>

<StyledCardWrapper2>
    <p>deneme2</p>
</StyledCardWrapper2>

</div> */}


