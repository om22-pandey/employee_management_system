# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

📋 Employee Task Management System
A simple, intuitive web application built with React that allows an admin to assign tasks to employees, and employees to view and manage their tasks. This system uses React Context for state management and has basic login functionality , also it uses localstorage to store data of employees and admin.

🚀 Features
🔐 Admin & Employee Login
🧑‍💼 Admin Dashboard:
View all employees and their task counts (New, Active, Completed, Failed)
Create and assign new tasks to employees
📋 Employee Dashboard:
View tasks categorized by status
(Planned) Update task status (Accept, Complete, Fail)
💾 Data Persistence using localStorage (no backend required)

📩Emails and Passwords for admin and all the users------>
Admin ---> admin@me.com , password = 123
employee 1 ----> emp1@me.com , password = 123
employee 2 ----> emp2@me.com , password = 123
employee 3 ----> emp3@me.com , password = 123
employee 4 ----> emp4@me.com , password = 123
employee 5 ----> emp5@me.com , password = 123

🔁 Component Communication (Logical Flow)
main.jsx → App.jsx → AuthProvider (Context Provider)
App.jsx
├── <Header />                        ← components/Others/Header.jsx
├── <Login />                        ← components/Auth/Login.jsx
├── <AdminDashboard />              ← components/Dashboard/AdminDashboard.jsx
│   ├── <CreateTask />
│   ├── <AllTask />
│   └── <TaskListNumber />
├── <EmployeeDashboard />           ← components/Dashboard/EmployeeDashboard.jsx
│   └── <TaskList />
│       ├── <NewTask />
│       ├── <AcceptTask />
│       ├── <CompleteTask />
│       └── <FailedTask />


🧑‍🏫 How to Use
Use the Deployed Version
Visit: 🔗https://om22-pandey.github.io/employee_management_system/

video demo on how to uss---->
please do wath this video....
https://drive.google.com/file/d/14Gsk-WPN011mFO6RH5EwbazX6NhiXQE_/view?usp=sharing
![image](https://github.com/user-attachments/assets/e5dde955-010b-4a2b-a317-cd16d4ef2b41)
![image](https://github.com/user-attachments/assets/e75cc515-ba2c-4491-b677-b4c214832e49)
![image](https://github.com/user-attachments/assets/d8648702-29af-419b-9d52-4deb31356fea)
![image](https://github.com/user-attachments/assets/5488a972-def4-45c8-993b-33bf2f092d6d)

✅ No installation required — just open in browser and start using.

 Future Improvements
✅ Task Status Update Functionality: Employees will be able to accept, complete, or fail tasks.
🧠 Authentication with Backend (Optional)
📊 Task Filtering, Sorting & Pagination
📱 Mobile Responsive Enhancements

🙌 Credits
This project was built using:
React.js
Tailwind CSS
Vite
