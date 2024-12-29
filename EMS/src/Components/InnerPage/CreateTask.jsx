import { React, useState, useContext } from "react";
import AllTask from "./AllTask";
import { AuthContext } from "../Context/AuthProvider";

const CreateTask = () => {
  const [userData, setuserData] = useContext(AuthContext); 
  

 
  const [TaskTitle, setTaskTitle] = useState("");
  const [TaskDate, setTaskDate] = useState("");
  const [TaskDescription, setTaskDescription] = useState("");
  const [Category, setCategory] = useState("");
  const [AsignTo, setAsignTo] = useState("");

 
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!TaskTitle || !TaskDate || !AsignTo || !Category) {
      alert("Please fill out all fields!");
      return;
    }

    const newTask = {
      TaskTitle,
      TaskDate,
      TaskDescription,
      Category,
      Active: false,
      NewTask: true,
      Completed: false,
      Failed: false,
    };

   
    const updatedEmployees = userData.employees.map((employee) => {
      if (employee.name === AsignTo) {console.log(employee.tasks)
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          NewTask: employee.NewTask + 1, 
        };
      }
      return employee;
    });

   
    const updatedData = { ...userData, employees: updatedEmployees };
    setuserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setTaskTitle("");
    setTaskDate("");
    setTaskDescription("");
    setCategory("");
    setAsignTo("");
  };

  return (
    <div className="CreateTask p-3">
      <form
        className="text-light fw-bold d-flex justify-content-between"
        onSubmit={handlerSubmit}
      >
        <div>
          <div>
            <label className="form-label">Task Title</label>
            <input
              type="text"
              placeholder="Make UI Design"
              className="form-control"
              value={TaskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              value={TaskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Assign To</label>
            <input
              type="text"
              placeholder="Employee Name"
              className="form-control"
              value={AsignTo}
              onChange={(e) => setAsignTo(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Category</label>
            <input
              type="text"
              placeholder="Design, Dev, etc."
              className="form-control"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        <div className="Description">
          <div>
            <label className="form-label">Description</label>git 
            <textarea
              className="form-control"
              value={TaskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
          <button className="btn btn-success mt-2">Create Task</button>
        </div>
      <AllTask />
      </form>
    </div>
  );
};

export default CreateTask;
