import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashBoard = ({changeUser}) => {
  return (
    <>
      <div className="AdminDash ">
        <Header changeUser={changeUser} />
         <CreateTask changeUser={changeUser}/>
         <AllTask/>
      </div>
    </>
  );
};

export default AdminDashBoard;
