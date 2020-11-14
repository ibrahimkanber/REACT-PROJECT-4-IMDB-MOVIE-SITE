import React, { useState } from 'react'

export const Search = ({onSearch}) => {
  
    // console.log(value)
    return (
        <div>
            <input type="text" onChange={(event)=>onSearch(event.target.value)} />
        </div>
    )
}
