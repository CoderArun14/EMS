import React, { useContext, useState } from 'react'
import AppName from './AppName'
import AddTodoItems from './AddTodoItems'
import TodoItemSContainer from './TodoItemSContainer'
import { storeProvide } from '../Store/Store'

const ToDoContainers = () => {
  
    let data = [
        {
            work:"agra jana hai",
            myDate:"18/11/2024"
        },
        {
            work:"agra jana hai",
            myDate:"18/11/2024"
        },
        {
            work:"agra jana hai",
            myDate:"18/11/2024"
        }
    ]
    let [addTodo,setaddTodo] = useState(data)
   
    const handleAdd = (work,myDate)=>{
        let newData = {
            work,
            myDate
        }
        setaddTodo([...addTodo,newData])
        
    }
    const handleDelete = (id)=>{
        let afterDel = addTodo.filter((elm,ind)=> ind !=id)
        setaddTodo(afterDel)
    }
  return (
    <storeProvide.Provider value={addTodo}>
            <div className="container " >
        <div className="row">
            <div className="col-8  mx-auto">
                <AppName/>
                <AddTodoItems handleAdd={handleAdd}/>
                {addTodo.length==0 && <h1>There is no Task</h1>}
                <TodoItemSContainer handleDelete={handleDelete} />
            </div>
        </div>
    
    </div>
    </storeProvide.Provider>

  )
}

export default ToDoContainers