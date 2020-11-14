import React,{useEffect, useState} from 'react'
import {useSelector} from "react-redux";
export const Favorites = () => {
 const[list,setList]=useState("");
    const data=useSelector(state=>state.favorites)
   

    return (
        <div>
         {
             data && data.map(item=>(
             <p>{item}</p>
             ))
         }
        </div>
    )
}
