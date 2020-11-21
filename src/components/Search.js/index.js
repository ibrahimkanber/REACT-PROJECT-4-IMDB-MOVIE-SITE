import React, { useState,useRef } from 'react'
import { StyledSearchInput,StyledSearchbarWrapper } from './SearchBox.style'

export const Search = ({onSearch}) => {
    const inputRef=useRef()
    // console.log(value)
    return (
        <StyledSearchbarWrapper >
            <StyledSearchInput type="text" onChange={(event)=>onSearch(event.target.value)} placeholder="enter movie name.."  ref={inputRef}/>
        </StyledSearchbarWrapper>
    )
}
