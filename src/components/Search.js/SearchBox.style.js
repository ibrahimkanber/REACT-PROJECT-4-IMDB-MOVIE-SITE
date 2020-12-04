import styled, { css } from "styled-components";

export const StyledSearchbarWrapper=styled.div`
        background-color: white;
        display: flex;
        align-items:center;
        justify-content:space-between;
        padding: 10px;
        border-radius: 15px;
        width: 20%;
`
export const StyledSearchInput=styled.input`
        flex:1;
        padding:10px;
        margin-right:20px;
        margin-left:2px;
        border-radius:5px;
        border: none;
        outline:none;
        padding: 3px;
        width: 25%;
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
`