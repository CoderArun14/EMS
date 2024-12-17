import React from 'react'
import Practice from './container/Practice'
import Appname from './container/Appname'
// import { useRef } from 'react'


const App = () => {
  
    // let myval =  useRef()
    
    // const handle = ()=>{   
    //   console.log(myval.current.value);
    //  }

  return (
    <>
    <Practice>
      
    <Appname />
    {/* <input type="text" ref={myval} />
    <button onClick={handle}>click</button> */}
    </Practice>
    </>
  )
}

export default App