import React from "react";

const TodoItemSContainer = ({data}) => {
  return (
    <>
      <ul class="list-group  my-2  ">
       {data.map(singleTask=> <li class="list-group-item border-0 my-2">
            <div className="row ">
                <div className="col-5  ">{singleTask.work}</div>
                <div className="col-5 ">{singleTask.myDate}</div>
                <div className="col-2   text-center"><button className="btn btn-danger">Delete</button></div>
            </div>
        </li>)}
      </ul>
    </>
  );
};

export default TodoItemSContainer;
