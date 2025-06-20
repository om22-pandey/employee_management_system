import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className=" min-w-dvh p-10">
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
