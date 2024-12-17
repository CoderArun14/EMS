import React from 'react'
import Text from './Text'

const Third = ({footData,bg}) => {
  return (
    <div className={`${bg}`}>
        <div className="container">
            <div className="row">
                {footData.map(data=> <Text data ={data}/>)}
            </div>
        </div>
    </div>
  )
}

export default Third