import React,{useState,useEffect} from 'react'
import {auth} from "../../firebase/fbconfig";
import {useHistory} from "react-router-dom";

export const Login = () => {
    const history=useHistory()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [currentUser,setCurrentUser]=useState("");

 
    const handleSubmit=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then(u=>console.log(u)).catch(e=>console.log(e))
        history.push("/")

    }

    

   /*  console.log(currentUser) */
    return (
        <div style={{color:"white"}}>
            <form onSubmit={handleSubmit}>
                <input type="email"placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Sign In</button>
           </form>
        </div>
    )
}
