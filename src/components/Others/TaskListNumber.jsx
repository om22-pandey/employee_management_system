import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className=" flex mt-10 justify-between gap-5 screen text-white">
      <div className="h-40 w-[45%] px-9 py-6 rounded-2xl bg-red-400">
        <h1 className="text-3xl font-semibold">{data.taskCount.active}</h1>
        <h3 className="text-xl font-medium">Active</h3>
      </div>
      <div className="h-40 w-[45%] px-9 py-6 rounded-2xl bg-blue-400">
        <h1 className="text-3xl font-semibold">{data.taskCount.newTask}</h1>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="h-40 w-[45%] px-9 py-6 rounded-2xl bg-green-400">
        <h1 className="text-3xl font-semibold">{data.taskCount.completed}</h1>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="h-40 w-[45%] px-9 py-6 rounded-2xl bg-yellow-400">
        <h1 className="text-3xl font-semibold">{data.taskCount.failed}</h1>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
