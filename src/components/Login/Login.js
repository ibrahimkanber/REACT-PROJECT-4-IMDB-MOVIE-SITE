import React, { useState, useEffect } from 'react'
import { auth } from "../../firebase/fbconfig"
import { useHistory } from "react-router-dom"



export const Login = ({ setLogin, setReset }) => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(u => history.push("/")).catch(e => setError(e))
    }

    const handleReset = () => {
        setLogin(false)
        setReset(true)
    }

    return (
        <div>
            <button onClick={() => setLogin(false)} style={{position: 'absolute', top: 0, right: 0,fontSize: 20, color: 'white', border: 'none', background: 'red'}}>
                X
            </button>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', height: 400, width: 300, justifyContent: 'space-around', borderRadius: 15 }}>
                <div>
                    <label for="email">Email</label>
                    <input id="email" type="email" placeholder="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} style={{ display: 'block', padding: 6, marginTop: 7, borderRadius: 7, width: '93%', outline: 'none', border: '1px solid #005cb2' }} />
                </div>

                <div>
                    <label for="password">Password</label>
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} style={{ display: 'block', padding: 6, marginTop: 7, borderRadius: 7, width: '93%', outline: 'none', border: '1px solid #005cb2' }} />
                    <p style={{ textAlign: 'right' }}>
                        <button onClick={handleReset}>Forgot Password?</button>
                    </p>
                </div>

                <button className="loginSubmit" type="submit" >Submit</button>
                <p style={{ color: 'red', margin: '0 auto' }}>{error ? error.message : null}</p>
            </form>
        </div>
    )
}
