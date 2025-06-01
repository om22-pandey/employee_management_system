import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    // console.log(props.changeUser);
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between p-4 rounded-lg shadow-md border border-gray-200">
      <h1 className="text-gray-700 text-2xl font-medium">
        Hello 👋
        <br />
        <span className="text-3xl font-semibold text-blue-600">
          {props.data.firstName}
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-blue-500 hover:bg-blue-600 text-white text-base font-medium px-5 py-2 rounded-md transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
