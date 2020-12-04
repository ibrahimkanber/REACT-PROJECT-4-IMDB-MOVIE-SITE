import React,{useState, useEffect } from 'react'
import {auth} from "../../firebase/fbconfig"
import { useHistory } from "react-router-dom"


export const Reset = ({setReset}) => {

    const history = useHistory()
    
    const [email, setEmail] = useState("")
    
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        auth.sendPasswordResetEmail(email).then(u=> setReset(false)).catch(e => setError(e)) 
    } 

    return (
        <div>
            <button onClick={() => setReset(false)} style={{position: 'absolute', top: 0, right: 0,fontSize: 20, color: 'white', border: 'none', background: 'red'}}>
                X
            </button>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', height: 400, width: 300 , justifyContent: 'space-around', borderRadius: 15}}>

                <div>
                <label for="email" >Email</label>
                <input id="email" autoComplete="off" type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)} style={{display:'block', padding: 6, marginTop: 7, borderRadius: 7, width: '93%', outline: 'none', border: '1px solid #005cb2'}}/>
                </div>


                <button className="loginSubmit" type="submit" >Reset</button>
                <p style={{color:'red', margin: '0 auto'}}>{error ? error.message: null}</p>
            </form>
        </div>
    )
}