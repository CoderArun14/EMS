
const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "firstname": "Arjun",
    "taskNumbers": {
      "Active": 1,
      "NewTask": 1,
      "Completed": 1,
      "Failed": 1
    },
    "tasks": [
      {
        "Active": true,
        "NewTask": true,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Submit report",
        "TaskDescription": "Submit the monthly financial report.",
        "TaskDate": "2024-06-17",
        "Category": "Finance"
      },
      {
        "Active": false,
        "NewTask": false,
        "Completed": true,
        "Failed": false,
        "TaskTitle": "Attend training",
        "TaskDescription": "Complete the safety training program.",
        "TaskDate": "2024-06-15",
        "Category": "Training"
      },
      {
        "Active": false,
        "NewTask": false,
        "Completed": false,
        "Failed": true,
        "TaskTitle": "Fix bug #123",
        "TaskDescription": "Resolve the reported frontend issue.",
        "TaskDate": "2024-06-12",
        "Category": "Development"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstname": "Priya",
    "taskNumbers": {
      "Active": 1,
      "NewTask": 1,
      "Completed": 1,
      "Failed": 0
    },
    "tasks": [
      {
        "Active": true,
        "NewTask": true,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Prepare presentation",
        "TaskDescription": "Prepare slides for the project review meeting.",
        "TaskDate": "2024-06-18",
        "Category": "Meetings"
      },
      {
        "Active": false,
        "NewTask": false,
        "Completed": true,
        "Failed": false,
        "TaskTitle": "Update project plan",
        "TaskDescription": "Update tasks and timelines in the project management tool.",
        "TaskDate": "2024-06-15",
        "Category": "Planning"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstname": "Kiran",
    "taskNumbers": {
      "Active": 1,
      "NewTask": 1,
      "Completed": 1,
      "Failed": 1
    },
    "tasks": [
      {
        "Active": true,
        "NewTask": true,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Follow up with client",
        "TaskDescription": "Call and discuss the new project requirements.",
        "TaskDate": "2024-06-17",
        "Category": "Client Management"
      },
      {
        "Active": false,
        "NewTask": false,
        "Completed": true,
        "Failed": false,
        "TaskTitle": "Send invoice",
        "TaskDescription": "Send invoice for the completed milestones.",
        "TaskDate": "2024-06-13",
        "Category": "Finance"
      },
      {
        "Active": false,
        "NewTask": false,
        "Completed": false,
        "Failed": true,
        "TaskTitle": "Resolve server issue",
        "TaskDescription": "Fix server downtime issue reported yesterday.",
        "TaskDate": "2024-06-10",
        "Category": "IT Support"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstname": "Ananya",
    "taskNumbers": {
      "Active": 1,
      "NewTask": 1,
      "Completed": 1,
      "Failed": 0
    },
    "tasks": [
      {
        "Active": true,
        "NewTask": true,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Write documentation",
        "TaskDescription": "Document the new API endpoints for developers.",
        "TaskDate": "2024-06-18",
        "Category": "Documentation"
      },
      {
        "Active": false,
        "NewTask": false,
        "Completed": true,
        "Failed": false,
        "TaskTitle": "Organize team meeting",
        "TaskDescription": "Schedule and lead the monthly team meeting.",
        "TaskDate": "2024-06-15",
        "Category": "Meetings"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstname": "Rohit",
    "taskNumbers": {
      "Active": 1,
      "NewTask": 1,
      "Completed": 1,
      "Failed": 1
    },
    "tasks": [
      {
        "Active": true,
        "NewTask": true,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Research competitor analysis",
        "TaskDescription": "Gather information on key competitors.",
        "TaskDate": "2024-06-19",
        " ": "Research"
      },
      {
        "Active": false,
        "NewTask": false,
        "Completed": false,
        "Failed": true,
        "TaskTitle": "Update project dashboard",
        "TaskDescription": "Fix the issues in the project dashboard metrics.",
        "TaskDate": "2024-06-14",
        "Category": "Development"
      },
      {
        "Active": false,
        "NewTask": false,
        "Completed": true,
        "Failed": false,
        "TaskTitle": "Check server logs",
        "TaskDescription": "Review server logs for error detection.",
        "TaskDate": "2024-06-12",
        "Category": "IT Support"
      }
    ]
  }
];


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  },
  
];


export  const SetLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admit',JSON.stringify(admin))
}

export  const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admit'))
 
  return{admin,employees}
  // console.log(admin)
}