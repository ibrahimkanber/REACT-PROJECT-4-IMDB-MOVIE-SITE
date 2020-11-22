import React from 'react';
import { useParams } from "react-router-dom"

export const Example = () => {
    const params=useParams()
    console.log(params)
    return (
        <div style={{color:"white"}}>
            Example
        </div>
    )
}
