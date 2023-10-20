import React from 'react'

export default function MealIndex({alphaIndex}) {
    const alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let num = 0;
  return (
    <>
      {
        alpha.map(item=>{
            return(
                <div className="numBox" key={num++} onClick={()=>alphaIndex(item)}>
                <h3>{item}</h3>
                </div>
            )
        })
      }
      </>
  )
}
