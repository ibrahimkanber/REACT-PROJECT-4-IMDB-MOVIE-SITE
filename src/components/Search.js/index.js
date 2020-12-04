import React, { useContext } from 'react'
import { MovieContex } from "../../Router/Router"
import { StyledSearchInput,StyledSearchbarWrapper } from './SearchBox.style'
import Searchpng from '../../img/google.png'

export const Search = () => {
    
    const { setSearchedValue } = useContext(MovieContex)
    return (
        <StyledSearchbarWrapper >
            <img src={Searchpng} style={{color:"red", height: 30}}/>
            <StyledSearchInput type="text" onChange={(event)=>setSearchedValue(event.target.value)} placeholder="enter movie name.." />
        </StyledSearchbarWrapper>
    )
}
