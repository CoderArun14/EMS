import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./assets/utility/TodoSlice";

const TodoApp = () => {
   let callLagado =  useDispatch()
  // let {todos}= useSelector((state)=>state.Counter)
  let {todos} = useSelector((state)=>state.todoapp)
  // console.log(data)
  const handleDel = (id)=>{
      callLagado(deleteTodo(id))
  }
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-8 mx-auto">
            <h1>ToDoApp</h1>

            <ul class="list-group">
             {todos.map((elm,ind)=> <li class="list-group-item">
              <div className="row">
                <div className="col-5">{elm.work}</div>
                <div className="col-5">{elm.myDate}</div>
                <div className="col-2"> <button 
                  onClick={()=>handleDel(ind)}
                className="btn btn-danger">Delete</button></div>
              </div>

             </li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
