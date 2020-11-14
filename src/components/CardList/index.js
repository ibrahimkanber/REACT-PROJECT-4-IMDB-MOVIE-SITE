import React, { useEffect, useState } from 'react'
import { Card } from '../Card';
import axios from 'axios';
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { Search } from '../Search.js';

const apiKey = "2ab876e9698659187d8d9420ef4d232c"; //temporary
const baseUrl="https://api.themoviedb.org/3/search/movie";

export const CardList = () => {
    
    const data=useSelector(state=>state)
   
    const [searchedValue,setSearchedValue]=useState("Star Wars")
    const dispatch=useDispatch()
    

    const [movieList,setMovieList]=useState("")
  
    const fetchMovies=(pageNum=1)=>{
        axios.get(baseUrl,{
            params: {
                api_key:apiKey,
                page:pageNum,
                query:searchedValue//TODO: from input
            }
        }).then(({data:{results}})=>setMovieList(results))

        
    }

    useEffect(()=>{
        fetchMovies()
    },[searchedValue])
    // console.log(searchedValue)
    // console.log(movieList)
    return (
        <div>
            <Search onSearch={val=>setSearchedValue(val)}/>
            <Link to="/favorites">Favorites</Link>
            <ReactPaginate
            pageCount={Math.ceil(movieList.length/10)}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={(data)=>fetchMovies(data.selected+1)}
            containerClassName="pagination"
            />
            {
                movieList && movieList.map((movie,index)=>{
                    return(
                        <Card movie={movie} key={index}/>
                    )
                })
            }
           
        </div>
    )
}
