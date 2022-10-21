import React, { useEffect } from 'react'

export default function ImgFrame(props) {
    useEffect(()=>{
        
    },[])
  return (
    <>
        <div className='imgframe-box'>
            {console.log(props.imgUrl)}
            <img src={props.imgUrl} alt="" />
        </div>
    </>
  )
}
