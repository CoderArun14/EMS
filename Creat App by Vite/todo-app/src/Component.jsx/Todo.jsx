// import React, { useState } from 'react'
// import Header from './Header'
// import Secone from './Secone'
// import Sectwo from './Sectwo'
// import Welcome from './Welcome'
// import { storeProvide } from './Store'

// const Todo = () => {

// //   let data = [
// //     {
// //         work:"agra jana hai",
// //         myDate:"18/11/2024"
// //     },
// //     {
// //         work:"agra jana hai",
// //         myDate:"18/11/2024"
// //     },
// //     {
// //         work:"agra jana hai",
// //         myDate:"18/11/2024"
// //     }
// // ]

// let [Todoitem,settodoitem] = useState([])
 
// const handlernewitem = (newItem,newDate)=>{
//   console.log(`new Item :${newItem} Date:${newDate}`)

//   const Newtodoitem = [...Todoitem,
//     {
//       work : newItem, 
//       myDate: newDate
//     }
//   ]
//   settodoitem(Newtodoitem)
// }

// const Deteleitem =(index)=>{
//   let Detelebtn = Todoitem.filter((elm,ind)=> ind !=index)
//   settodoitem(Detelebtn)
  
// }

//   return (
    
//     <storeProvide.Provider value={{Todoitem, Deteleitem ,handlernewitem }}>
//     <div className='todo container text-center'>
//     <Header/>
//     <Secone />
//     {Todoitem.length === 0 && <Welcome/> }
//     <Sectwo  />
//     </div>
//      </storeProvide.Provider>
    
//   )
// }

// export default Todo


// import React, { useState } from 'react'
// import Header from './Header'
// import Secone from './Secone'
// import Sectwo from './Sectwo'
// import Welcome from './Welcome'
// import { storeProvide } from './Store'

// const Todo = () => {

//   let [Tododata,newTododata] = useState([])


// const Addnewitem = (newtask,newdate)=>{
//   console.log(newtask,newdate);

//   let newdata =[...Tododata,
//     {
//       Work:newtask,
//       Date:newdate
//     }
//   ]
//   newTododata(newdata)

// }

// const Delete =(index)=>{
//   let Deletebtn = Tododata.filter((Ap,id)=> id != index)
//   newTododata(Deletebtn)

// }

//   return (
//     <storeProvide.Provider  value={Tododata}>
//     <div className="container ">
//     <Header/>
//     <Secone Addnewitem ={Addnewitem}/>
//    {Tododata.length===0 &&  <Welcome />}
//     <Sectwo Tododata={Tododata} Delete={Delete}/>
//     </div>
//     </storeProvide.Provider>
    
//   )
// }

// export default Todo

import React from 'react'
import Header from './Header'
import Secone from './Secone'
import { storeProvide } from './Store'
import Sectwo from './Sectwo'

const Todo = () => {

  let data =[
    {
      Work: "ghar Jana h",
      Date: "feiheifh"
    }]

    const Additem =(Mydate,MyWork)=>{
      console(Mydate,Mywork)
    }
  return (

    <storeProvide.Provider  value={{data ,Additem} }>
    <div className='container'>
    <Header/>
    <Secone/>
    <Sectwo/>
    </div>
    // </storeProvide.Provider>
    
  )
}

export default Todo