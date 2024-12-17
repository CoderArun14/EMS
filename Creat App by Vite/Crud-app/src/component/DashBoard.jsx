import React, { useContext ,useEffect} from 'react'
import { StoreProvider } from '../Store/Store'
import Modalform from './Modalform'

const DashBoard = () => {

  let {newData,getData,handleDelete,handleShow,handleUpdate,getSingleData} =useContext(StoreProvider)
  useEffect(()=>{
    getData()
   },[])

  return (
    <>
    <Modalform/>
    <div  className='container'>
    <table className="table text-center">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {newData.map((elm,ind)=><tr key={ind}>
      <th scope="row">{elm.id}</th>
      <td>{elm.name}</td>
      <td>{elm.email}</td>
      <td>{elm.address}</td>
      <td>
        <button
        onClick={()=>getSingleData(elm.id)}
        className='btn mx-1 btn-success'>Edit</button>
        <button className='btn mx-1 btn-danger' onClick={()=>handleDelete(elm.id)}>Delete</button>
        <button className='btn mx-1 btn-primary'>Read</button>
      </td>
    </tr>)}
  </tbody>
</table>
    </div>
    </>
  )
}

export default DashBoard


// import React, { useContext } from 'react'
// import { StoreProvider } from '../Store/Store'


// const DashBoard = () => {
//   let {newData} = useContext(StoreProvider)
//   return (
//     <>
//     <table class="table text-center ">
//   <thead>
//     <tr>
//       <th scope="col">Id</th>
//       <th scope="col">Name</th>
//       <th scope="col">Email</th>
//       <th scope="col">Address</th>
//     </tr>
//   </thead>
//   <tbody>
//   {newData.map((elm,ind)=>
//      <tr>
//      <th scope="row">{elm.id}</th>
//      <td>{elm.name}</td>
//      <td>{elm.email}</td>
//      <td>{elm.address}</td>
//    </tr>
//   )}
//   </tbody>
// </table>
//     </>
//   )
// }

// export default DashBoard


