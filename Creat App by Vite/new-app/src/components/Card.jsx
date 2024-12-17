import React from 'react'
import Img from './img'
import Middays from './Middays'
import Midpost from './Midpost'
import Para from './Para'
import Lowersec from './Lowersec'


const Card = ({info}) => {
  let {imgData,days,post,lowerData,color,bg} = info
  return (
    <>
    <div className='card'>
        <Img imgData = {imgData}/>
        <Middays days={days} color={color}/>
        <Midpost post={post}/>
        <Para/>
        <Lowersec lowerData={lowerData} bg={bg}/>
    </div>
    </>
  )
}

export default Card