import React from "react";

const AcceptTask = ({ data }) => {
  // console.log(data.title)
  return (
    <div className="flex flex-shrink-0 p-5 h-full w-[300px] bg-red-400 rounded-2xl justify-around flex-col">
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
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm w-fit">
          {" "}
          mark as Completed
        </button>
        <button className="bg-green-500 py-1 px-2 text-sm w-fit">
          mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
