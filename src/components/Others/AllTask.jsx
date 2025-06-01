import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(AuthData.employees);

  return (
    <div
      id="alltask"
      className="p-6 mt-5 space-y-4 rounded-lg h-80 shadow-md border border-gray-200"
    >
      <div className="bg-blue-500 py-4 px-6 rounded-lg flex justify-between items-center text-white shadow-sm">
        <h2 className="font-semibold text-base md:text-lg w-1/5">
          Employee Name
        </h2>
        <h3 className="text-sm md:text-base w-1/5">New Task</h3>
        <h5 className="text-sm italic w-1/5 ">Active Task</h5>
        <h5 className="text-sm italic w-1/5 ">Completed</h5>
        <h5 className="text-sm italic w-1/5 ">Failed</h5>
      </div>

      <div className="h-[80%] overflow-auto">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className=" hover:bg-blue-50 transition-colors duration-200 py-4 px-6 rounded-lg flex justify-between items-center text-gray-700 border border-gray-200 mb-2"
          >
            <h2 className="font-medium text-sm md:text-base w-1/5">
              {elem.firstName}
            </h2>
            <h3 className="text-sm w-1/5">{elem.taskCount.newTask}</h3>
            <h5 className="text-sm w-1/5">{elem.taskCount.active}</h5>
            <h5 className="text-sm w-1/5">{elem.taskCount.completed}</h5>
            <h5 className="text-sm w-1/5">{elem.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
