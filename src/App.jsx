import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLocalStorage();
    // getLocalStorage();
  }, []);

  const [userData, setUserData] = useContext(AuthContext);
  // console.log(userData);
  // console.log(AuthData.admin);
  // console.log(AuthData.employees);

  useEffect(() => {
    if (userData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      // console.log(loggedInUser);
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);
        // console.log(userData)
        setUser(userData.role);
        setLoggedInUserData(userData.data);
        // console.log(user);
      }
      // setLoading(false);
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      // console.log("this is admin")
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      // console.log(user);
    } else if (
      userData &&
      userData.find((e) => email == e.email && e.password == password)
    ) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("invalid credentials");
    }
  };

  // if (loading) return <div className="text-white p-4">Loading...</div>; // PREVENT premature rendering

  return (
    <>
      {/* <Login/> */}
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user == "admin" ? (
        <AdminDashboard
          changeUser={setUser}
          data={{ firstName: "OM PANDEY" }}
        />
      ) : (
        ""
      )}
      {user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : (
        ""
      )}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
