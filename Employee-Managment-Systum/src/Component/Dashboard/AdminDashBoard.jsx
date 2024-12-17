import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashBoard = () => {
  return (
    <>
      <div className="AdminDash ">
        <Header />
         <CreateTask/>
         <AllTask/>
      </div>
    </>
  );
};

export default AdminDashBoard;
