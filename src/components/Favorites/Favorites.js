import React,{useEffect, useState} from 'react';
import {db} from "../../firebase/fbconfig"
import { StyledCardWrapper, StyledFooterWrapper, StyledImgWrapper } from '../Card/Card.style';
export const Favorites = () => {
  const[favList,setFavList]=useState(null)
  const [flag,setFlag]=useState(true)

  const fetchData=async()=>{
     let data=await db.collection("favoriteMovies").get()
     setFavList(data.docs)
    
  }
  useEffect(()=>{
      fetchData()
  },[flag])


  const deleteFav=async (mov)=>{
    await db.collection("favoriteMovies").doc(mov.id).delete()
    setFlag(!flag)
    
  }
  
    return (
      <div style={{color:"white"}}>

        {
          favList?.map(mov=>(
            <div style={{margin:10,backgroundColor:"yellow"}}>
                <p>{mov.data().title}</p>
                <button onClick={()=>deleteFav(mov)}>delete</button>
              </div>
          ))
        }


        </div>
    )
}
