import React, { useContext } from "react";
import { storeProvide } from "../Store/Store";

const TodoItemSContainer = ({ handleDelete }) => {
      let data=  useContext(storeProvide)
      // console.log(obj);
      
  return (
    <>
      <ul className="list-group  my-2  ">
        {data.map((singleTask, ind) => (
          <li key={ind} className="list-group-item border-0 my-2">
            <div className="row ">
              <div className="col-5">{singleTask.work}</div>
              <div className="col-5">{singleTask.myDate}</div>
              <div className="col-2  text-center">
                <button 
                onClick={()=>handleDelete(ind)}
                className="btn btn-danger">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoItemSContainer;
