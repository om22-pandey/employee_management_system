import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = [...userData];
    // console.log(data);

    data.forEach((elem) => {
      if (assignedTo.toLowerCase() === elem.firstName.toLowerCase()) {
        elem.tasks.push(newTask);
        elem.taskCount.newTask = elem.taskCount.newTask + 1;
      }
    });
    // console.log(data);
    // setAssignedTo('')
    // setCategory('')
    // setDate('')
    // setDescription('')
    // settitle('')
    // console.log("hii i am ompandey");
    // console.log(date, description , title, assignedTo , category)

    setUserData(data);
    // console.log(data);
    // console.log(userData);
    setAssignedTo("");
    setCategory("");
    setDate("");
    setDescription("");
    settitle("");
  };

  return (
    <div className="mt-10 bg-gray-50 rounded-xl shadow-lg max-w-5xl mx-auto p-10 border border-gray-200">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="space-y-8"
      >
        {/* Title + Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2 text-gray-700">
            <h3 className="text-base font-medium">Task Title</h3>
            <input
              value={title}
              onChange={(e) => settitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="w-full border border-gray-300 bg-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="space-y-2 text-gray-700">
            <h3 className="text-base font-medium">Date</h3>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="w-full border border-gray-300 bg-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="space-y-2 text-gray-700">
            <h3 className="text-base font-medium">Assign to</h3>
            <input
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              type="text"
              placeholder="Employee name"
              className="w-full border border-gray-300 bg-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="space-y-2 text-gray-700">
            <h3 className="text-base font-medium">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Dev etc."
              className="w-full border border-gray-300 bg-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2 text-gray-700">
          <h3 className="text-base font-medium">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Describe the task..."
            className="w-full border border-gray-300 bg-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
