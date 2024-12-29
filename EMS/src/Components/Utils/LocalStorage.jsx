
const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    name: "Amit Sharma",
    ActiveTask: 1,
    NewTask: 1,
    Completed: 2,
    Failed: 1,
    tasks: [
      {
        Active: true,
        NewTask: true,
        Completed: false,
        Failed: false,
        TaskTitle: "Prepare sales report",
        TaskDescription: "Compile and prepare the monthly sales report.",
        TaskDate: "2024-12-25",
        Category: "Sales"
      },
      {
        Active: false,
        NewTask: false,
        Completed: true,
        Failed: false,
        TaskTitle: "Team meeting",
        TaskDescription: "Attend the weekly team meeting to discuss project updates.",
        TaskDate: "2024-12-20",
        Category: "Management"
      },
      {
        Active: false,
        NewTask: true,
        Completed: false,
        Failed: false,
        TaskTitle: "Client follow-up",
        TaskDescription: "Follow up with clients regarding their queries.",
        TaskDate: "2024-12-26",
        Category: "Client Relations"
      },
      {
        Active: false,
        NewTask: false,
        Completed: true,
        Failed: false,
        TaskTitle: "Submit expense report",
        TaskDescription: "Submit last month's expense report for approval.",
        TaskDate: "2024-12-15",
        Category: "Finance"
      },
      {
        Active: false,
        NewTask: false,
        Completed: false,
        Failed: true,
        TaskTitle: "Fix website issue",
        TaskDescription: "Resolve the issue reported on the company's website.",
        TaskDate: "2024-12-10",
        Category: "IT"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    name: "Sneha Iyer",
    ActiveTask: 1,
    NewTask: 1,
    Completed: 1,
    Failed: 0,
    tasks: [
      {
        Active: true,
        NewTask: true,
        Completed: false,
        Failed: false,
        TaskTitle: "Design new brochure",
        TaskDescription: "Create a design for the new company brochure.",
        TaskDate: "2024-12-27",
        Category: "Design"
      },
      {
        Active: false,
        NewTask: false,
        Completed: true,
        Failed: false,
        TaskTitle: "Social media audit",
        TaskDescription: "Audit the company's social media accounts.",
        TaskDate: "2024-12-12",
        Category: "Marketing"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    name: "Rajesh Kumar",
    ActiveTask: 1,
    NewTask: 1,
    Completed: 1,
    Failed: 0,
    tasks: [
      {
        Active: true,
        NewTask: true,
        Completed: false,
        Failed: false,
        TaskTitle: "Plan team outing",
        TaskDescription: "Organize a team outing for the next quarter.",
        TaskDate: "2024-12-30",
        Category: "HR"
      },
      {
        Active: false,
        NewTask: false,
        Completed: true,
        Failed: false,
        TaskTitle: "Update company policies",
        TaskDescription: "Review and update company HR policies.",
        TaskDate: "2024-12-18",
        Category: "HR"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    name: "Anjali Mehta",
    ActiveTask: 1,
    NewTask: 1,
    Completed: 0,
    Failed: 0,
    tasks: [
      {
        Active: true,
        NewTask: true,
        Completed: false,
        Failed: false,
        TaskTitle: "Test new software",
        TaskDescription: "Perform QA testing on the new software release.",
        TaskDate: "2024-12-28",
        Category: "IT"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    name: "Vikram Desai",
    ActiveTask: 1,
    NewTask: 1,
    Completed: 0,
    Failed: 0,
    tasks: [
      {
        Active: true,
        NewTask: true,
        Completed: false,
        Failed: false,
        TaskTitle: "Prepare training material",
        TaskDescription: "Create training material for new employees.",
        TaskDate: "2024-12-29",
        Category: "Training"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    name: "Arun Pal"
  },
  {
    id: 2,
    email: "admin2@example.com",
    password: "123",
    name: "Anurag Pal"
  },
  {
    id: 3,
    email: "admin3@example.com",
    password: "123",
    name: "Rishabh Pal"
  }
];



export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];
  return { employees, admin };
};
