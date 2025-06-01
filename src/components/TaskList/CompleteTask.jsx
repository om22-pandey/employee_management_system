import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex flex-shrink-0 p-5 h-full w-[300px] bg-blue-400 rounded-2xl flex-col justify-around">
      <div className="">
        <div className="flex justify-between">
          <h3 className="bg-red-600 px-3 py-1 text-sm rounded">
            {data.category}
          </h3>
          <h4>{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">{data.description}</p>
      </div>
      <div className="mt-2">
        <button className="w-full bg-amber-900 py-1 px-2">Complete</button>
      </div>
    </div>
  );
};

export default CompleteTask;
