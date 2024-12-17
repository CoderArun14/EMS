import React from 'react'
import AppName from './AppName'
import AddTodoItems from './AddTodoItems'
import TodoItemSContainer from './TodoItemSContainer'

const ToDoContainers = () => {
    let data = [
        {
            work:"agra jana hai",
            myDate:"18/11/2024"
        },
        {
            work:"agra jana hai",
            myDate:"18/11/2024"
        }
    ]
  return (
    <div className="container " >
        <div className="row">
            <div className="col-8  mx-auto">
                <AppName/>
                <AddTodoItems/>
                <TodoItemSContainer data={data}/>
            </div>
        </div>
    
    </div>
  )
}

export default ToDoContainers