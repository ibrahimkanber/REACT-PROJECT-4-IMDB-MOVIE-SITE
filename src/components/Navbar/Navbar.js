import React, { useEffect } from 'react'
import { Link, useHistory } from "react-router-dom"
import { useState } from 'react/cjs/react.development'
import { auth } from "../../firebase/fbconfig"


export const Navbar = (props) => {

    const [flag, setFlag] = useState(false)

    const history = useHistory()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setFlag(true)
            } else {
                setFlag(false)
            }
        })
    }, [])


    const divEl = flag ? (
        <button onClick={() => auth.signOut()}>Logout </button>
    ) : (
            <div>
                <button onClick={() => history.push("/login")}>Login </button>
                
                <button onClick={() => history.push("/signup")}>SignUp </button>
            </div>
        )

    return (
        <div style={{ display: "flex", backgroundColor: "rgba(30,30,30,0.7)", justifyContent: "space-between", color: "white", padding: 10, alignItems: "center" }}>
            <div style={{ color: "white" }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
            </div>

            {
                divEl
            }

        </div>
    )
}
