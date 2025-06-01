localStorage.clear();
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "emp1@me.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Submit Report",
        description: "Submit the monthly financial report to the manager.",
        date: "2025-06-01",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend the project kick-off meeting.",
        date: "2025-06-03",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Client Call",
        description: "Call the client to discuss feedback.",
        date: "2025-06-04",
        category: "Communication",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "emp2@me.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Update Website",
        description: "Fix bugs and update the homepage design.",
        date: "2025-06-02",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Design Logo",
        description: "Create a logo for the new product line.",
        date: "2025-06-05",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Research Tools",
        description: "Evaluate tools for improving team productivity.",
        date: "2025-06-06",
        category: "Research",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Backup Database",
        description: "Perform a full backup of the project database.",
        date: "2025-06-07",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Kavya",
    email: "emp3@me.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Social Media Campaign",
        description: "Launch and monitor the summer campaign.",
        date: "2025-06-01",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Customer Survey",
        description: "Analyze results from the recent customer survey.",
        date: "2025-06-04",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Write Blog Post",
        description: "Write a blog post on product usage tips.",
        date: "2025-06-05",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare Presentation",
        description: "Prepare slides for stakeholder update.",
        date: "2025-06-06",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    firstName: "Neha",
    email: "emp4@me.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Inspect Equipment",
        description: "Check all office equipment for maintenance.",
        date: "2025-06-03",
        category: "Maintenance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Training Session",
        description: "Conduct training for new hires.",
        date: "2025-06-05",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Budget Planning",
        description: "Draft the quarterly budget for team expenses.",
        date: "2025-06-07",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "emp5@me.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Create User Guide",
        description: "Write a step-by-step user guide for new software.",
        date: "2025-06-01",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Data Cleanup",
        description: "Clean and organize user data from the database.",
        date: "2025-06-02",
        category: "Data",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Security Audit",
        description: "Run a security audit on the internal systems.",
        date: "2025-06-06",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Login Bug",
        description: "Resolve login issues reported by users.",
        date: "2025-06-08",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "OM PANDEY",
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  // localStorage.setItem('employees' , JSON.stringify(employees))
  // localStorage.setItem('admin' , JSON.stringify(admin))
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  // console.log(employees);

  const admin = JSON.parse(localStorage.getItem("admin"));
  // console.log(admin);
  // console.log('ompandey')
  return { employees, admin };
};
