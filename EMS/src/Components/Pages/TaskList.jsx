import React, { useState } from "react";
import NewTask from "../InnerPage/NewTask";
import AcceptTask from "../InnerPage/AcceptTask";
import CompleteTask from "../InnerPage/CompleteTask";
import Failed from "../InnerPage/Failed";

const TaskList = ({ employeeData }) => {
  
  const [tasks, setTasks] = useState(employeeData.tasks);

  
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task, idx) => idx !== taskId);
    setTasks(updatedTasks);
    
    localStorage.setItem("employeeData", JSON.stringify({ ...employeeData, tasks: updatedTasks }));

  };

  return (
    <div className="TaskList p-2">
      {tasks.map((elm, idx) => {
        if (elm.Active) {
          return <AcceptTask elm={elm} key={idx} onDelete={() => handleDeleteTask(idx)} />;
        }
        if (elm.NewTask) {
          return <NewTask elm={elm} key={idx} onDelete={() => handleDeleteTask(idx)} />;
        }
        if (elm.Completed) {
          return <CompleteTask elm={elm} key={idx} onDelete={() => handleDeleteTask(idx)} />;
        }
        if (elm.Failed) {
          return <Failed elm={elm} key={idx} onDelete={() => handleDeleteTask(idx)} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
