import React, { useState } from 'react'
import Card from './Card'
import {data} from "./data.js"
const CardContainer = () => {
  let [val,setVal] = useState("")
  let [filterData,setFilterData] = useState(data)
  // console.log(data);
  const searchHandle = ()=>{
    console.log(val);
    let newFilter = data.filter(sigledish=> sigledish.name.toLowerCase().includes(val.toLowerCase()) )
    setFilterData(newFilter);
    
  }
  const handleKhushi = (id)=>{
    let afterDelete = filterData.filter((elm)=> elm.id != id)
    setFilterData(afterDelete);
  }
  return (
    <>
    <div>
      <input type="text" className='my-2'
      onChange={(e)=> (setVal(e.target.value))
      }/>
      <button onClick={searchHandle}>search</button>
    </div>
    <div className="row">
      {filterData.map((elm,index)=> <div key={index} className="col-3">
        <Card handleKhushi={handleKhushi} elm={elm}/>
      </div>)}
    </div>
    </>
  )
}

export default CardContainer