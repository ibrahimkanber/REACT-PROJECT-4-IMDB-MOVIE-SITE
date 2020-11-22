import React, { useEffect } from 'react';
import ModalVideo from "react-modal-video";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import {auth} from "../../firebase/fbconfig"

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
    const [trackId, setTrackId] = useState("")
    const [isOpen, setOpen] = useState(false)
    const [flag, setFlag] = useState(false)
    const [sessionId,setSessionId]=useState("")
    const [val,setVal]=useState("");
    const [formflag,setFormFlag]=useState(false)


    const fetchTrailler = async () => {
        let { data: { results } } = await axios.get(`https://api.themoviedb.org/3/movie/${state.id}/videos?api_key=2ab876e9698659187d8d9420ef4d232c&language=en-US`)

        setTrackId(results[0].key)
    }

    useEffect(() => {
        fetchTrailler()
    }, [])


    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setFlag(true)
            } else {
                setFlag(false)
            }
        })
    }, [])

    const rateMovie=async()=>{
        setFormFlag(!formflag)
        let {data:{guest_session_id}}=await axios.get("https://api.themoviedb.org/3/authentication/guest_session/new?api_key=2ab876e9698659187d8d9420ef4d232c")
        setSessionId(guest_session_id)

    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {

            let res=await axios.post( `https://api.themoviedb.org/3/movie/${state.id}/rating?api_key=2ab876e9698659187d8d9420ef4d232c&guest_session_id=102ab4d81a3a39e022971a3e9c0c018e`,{
                "value":val
            }) 
            console.log("rated") 
            setFormFlag(!formflag)
        } catch (error) {
            console.log(error)
        }

 /*        console.log(res) */
    }

 /* console.log(sessionId) */
   
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
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trackId} onClose={() => setOpen(false)} />
                    <button className="btn-primary" onClick={() => setOpen(true)}>VIEW DEMO</button>
                    <button style={{display:flag?"block" :"none"}} onClick={rateMovie}>Rate Movie</button>
                    <form onSubmit={handleSubmit} style={{display:formflag? "block":"none"}} >
                        <input type="number" onChange={(e)=>setVal(e.target.value)}/>
                        <button type="submit">send</button>
                    </form>

                </div>


            </div>
        </div >
    )
}
