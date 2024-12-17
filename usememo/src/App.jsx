import React, { useMemo, useState } from 'react'

const App = () => {
  let [add,setAdd] = useState(0)
  let [sub,setSub] = useState(100)
  const myfun = useMemo(function mult(){
    console.log("asndfhjdfshj");
    return add*100
    
  },[add])
    
  return (
    <div>
      {myfun}<br/>
      <button onClick={()=>setAdd(add + 1)}>Add</button>{add}
      <br></br>
      <button onClick={()=> setSub(sub - 1)}>sub</button> {sub}
    </div>
  )
}

export default App