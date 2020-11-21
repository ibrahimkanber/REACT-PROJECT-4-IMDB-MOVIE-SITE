import React from 'react'
import { Link } from "react-router-dom"
export const Navbar = () => {
    return (
        <div style={{ display: "flex", backgroundColor: "rgba(30,30,30,0.7)", justifyContent: "space-between", color: "white", padding: 10, alignItems: "center" }}>
            <div style={{ color: "white" }}>
                <Link to="/" style={{ color: "white",textDecoration:"none" }}>Home</Link>
            </div>
            <div> 
                <button>Login </button>
            </div>
        </div>
    )
}
