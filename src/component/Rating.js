import React from 'react'


const Rating = ({count, ratingChange}) => {
    let stars =[]
     for (let i=0; i<5; i++){
         if(i<count){
            stars.push(<span onClick={()=>ratingChange(i+1)} key={i}>★</span>)
         }
         else{
            stars.push(<span onClick={()=>ratingChange(i+1)} key={i}>☆</span>)
         }
     }
    return (
        <div>
           {stars} 
        </div>
    )}

export default Rating
