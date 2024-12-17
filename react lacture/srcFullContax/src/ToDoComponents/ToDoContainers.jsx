import React, { useContext, useState } from "react";
import AppName from "./AppName";
import AddTodoItems from "./AddTodoItems";
import TodoItemSContainer from "./TodoItemSContainer";
import { StoreProvide } from "../Store/Store";
import ErrorMsg from "./ErrorMsg";

const ToDoContainers = () => {
  let data = [
    {
      work: "agra jana hai",
      myDate: "18/11/2024",
    },
    {
      work: "agra jana hai",
      myDate: "18/11/2024",
    },
    {
      work: "agra jana hai",
      myDate: "18/11/2024",
    },
  ];
  let [addTodo, setaddTodo] = useState(data);

  const handleAdd = (work, myDate) => {
    let newData = {
      work: "hasdjhg",
      myDate: "12/12/20125",
    };
    setaddTodo([...addTodo, { work, myDate }]);
    //   alert("hey shavi kesi hooo")
  };
  const handleDelete = (id) => {
    let afterDel = addTodo.filter((elm, ind) => ind != id);
    setaddTodo(afterDel);
  };
  return (
    // <StoreProvide.Provider value={[{work:"i am",myDate:"12/12/2045"}]}>
    <StoreProvide.Provider value={{ addTodo, handleAdd, handleDelete }}>
      <div className="container ">
        <div className="row">
          <div className="col-8  mx-auto">
            <AppName />
            <AddTodoItems />
            <ErrorMsg />
            <TodoItemSContainer />
          </div>
        </div>
      </div>
    </StoreProvide.Provider>
  );
};

export default ToDoContainers;
