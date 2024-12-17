import React, { useRef, useState } from 'react'
import Card from './Card'
import {data} from "./data.js"
const CardContainer = () => {
  // let [val,setVal] = useState("")
  let val = useRef()
  let [filterData,setFilterData] = useState(data)
  // console.log(data);
  const searchHandle = ()=>{
    console.log(val);
    // let newFilter = data.filter(sigledish=> sigledish.name.toLowerCase().includes(val.toLowerCase()) )
    // setFilterData(newFilter);
    let newData =data.filter(singobj=>singobj.name.toLowerCase().includes((val.current.value).toLowerCase()))
    setFilterData(newData)
    
  }
  const handleKhushi = (id)=>{
    let afterDelete = filterData.filter((elm)=> elm.id != id)
    setFilterData(afterDelete);
  }
  return (
    <>
    <div>
      <input type="text" className='my-2'
      ref={val}
      // onChange={(e)=> setVal(e.target.value)
      // }
      />
      <button onClick={searchHandle}>search</button>
    </div>
    <div className="row">
      {filterData.map((elm,ind)=> <div key={ind} className="col-3">
        <Card elm={elm} handleKhushi={handleKhushi}/>
      </div>)}
    </div>
    </>
  )
}

export default CardContainer