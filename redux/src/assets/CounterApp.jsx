import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './utility/CounterSlice'

const CounterApp = () => {
  let data  = useSelector((state)=>state.Counter)
    let callLagado = useDispatch()
  const handleInc = ()=>{
    // callLagado(increment())
    callLagado(increment("shavi kese khush karti ho..?????"))
  }
  const handleDec = ()=>{
      callLagado(decrement())
  }
  const handleRes = ()=>{
    callLagado(reset(0))
  }
  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-6 mx-auto text-center">
        <h1>Counter App</h1>
      <h1>{data.value}</h1>
      <button className='btn btn-success '
      onClick={handleInc}
      >inc</button>
        <button className='btn btn-warning'
      onClick={handleRes}
      >Reset</button>
      <button className='btn btn-danger'
      onClick={handleDec}
      >Dec</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default CounterApp