
import React, { useRef, useState } from 'react'
import Crad from './Crad'
import { data } from './Data'

const Appname = () => {

  // let [val,setval]=useState("")
  let val = useRef()
    let [filterData,setFilterData] =useState(data)
  
  


   
const Search = ()=>{
  console.log(val);

  let newFilter = data.filter(info => info.title.toLowerCase().includes((val.current.value).toLowerCase()))
  setFilterData(newFilter)

  

  
  
}
const Delete = (id)=>{

  let AfterDelete = filterData.filter((elm)=> elm.id != id)
  setFilterData(AfterDelete)
}
        
        
    
  return (
    <>
    <div>
      <input type="text" ref={val}
      // onChange={(e)=> setval(e.target.value)} 
      />
      <button onClick={Search}>Search</button>
    </div>
    <div className="row">
      {filterData.map((ap,index)=> <div  key={index} className="col-md-4">
        <Crad ap={ap} Delete={Delete}/>
      </div>)}
    </div>
    </>
  )
}
<div className="col-md-4"></div>
export default Appname