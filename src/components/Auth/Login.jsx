import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    // console.log(e.target.value);
    // console.log(email)
    // console.log(password)
    // console.log(props);
    props.handleLogin(email, password);
    setEmail("");
    SetPassword("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-300">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
          Log In
        </h2>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-6"
        >
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="px-4 py-3 border-2 border-red-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-200 transition duration-300 "
          />
          <input
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            placeholder="Password"
            className="px-4 py-3 border-2 border-red-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-200 transition duration-300"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <p className="cursor-pointer text-red-500 hover:underline">
              Forgot Password?
            </p>
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
