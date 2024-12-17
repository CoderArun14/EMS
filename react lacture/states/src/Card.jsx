import React from 'react'
import First from './Components/First'
import Second from './Second'
import Third from './Third'

const Card = ({info}) => {
  let {imgAdd,time,postCount,des,footData,color,bg} = info
  return (
    <>
    <First imgAdd={imgAdd}/>
    <Second time={time} postCount={postCount} des={des} color={color}/>
    <Third footData={footData} bg={bg} />
    </>
  )
}

export default Card