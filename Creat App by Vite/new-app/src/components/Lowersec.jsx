import React from 'react'
import Text from './Text'

const Lowersec = ({lowerData,bg}) => {
  return (
    <>
    <div className="container">
    <div className={`${bg} row p-2 rounded-2 rounded-top-0 text-light`}>
      {lowerData.map((data)=> (
          <Text data={data}/>
      ))}
    </div>
    </div>
    </>
  )
}


export default Lowersec