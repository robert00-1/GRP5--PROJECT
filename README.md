# Title 
Sudent Course Management System(SCMS)

# Description
A web-based application to manage student,courses and enrollments efficietly. SCMS provide administrators and educator with an intuitive interface to add, edit ,delete and track students and courses , while maintaining consistent records.

# Tool
vite
tailwind Css
React
react hot toast
react icon
react router dom

# Setup
followthis step to access and run this application
- clone repository into local machine
git clone https://github.com/robert00-1/GRP5--PROJECT.git

-navigate into the project folder
cd-SCMS-grp5

- install all dependancies
npm install
npm run dev
-open your VS code . to access code data 

start JSON Server
npx json-server --watch data/db.json --port 3002
 
 start react app
 npm run dev and copy paste link provided into your browser to view the application

 # Additional Instruction
 make sure you have install all dependacies
 npm install
 - run JSON Server 
 npx json-server --watch data/db.json --port 3002
 -Run Fronted
 npm run dev in seperate terminal

 # Usage

Navigate to Home to see quick stats.

Go to Students or Courses pages to manage data.

Use Add Student / Add Course buttons to add new records.

Delete or edit records directly from the lists.

# Project Stracture
scms-project/
│
├── public/
│   └── index.html                
│
├── src/
│   │
│   ├── pages/                     
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetail.jsx
│   │   ├── AddCourse.jsx
│   │   ├── Students.jsx
│   │   └── AddStudent.jsx
│   │
│   ├── components/                
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── StudentCard.jsx
│   │   ├── CourseCard.jsx
│   │   └── Button.jsx
│   │
│   ├── App.jsx                  
│   ├── main.jsx                   
│   └── main.css      (tailwind css)            
│
├── data/
│   └── db.json                    
│
├── package.json
└── README.md


## Objectives
- Maintain student records
- Manage course details
- Handle course enrollment
- Reduce manual paperwork


## Scope of the Project
- Create student and course registration forms (CRUD)
- Read course and student information
- Update course and student information
- Delete course or student information
- Deploy to a web hosting service (future)


## Key Features
✅ Students CRUD (Create, Read, Update, Delete)  
✅ Courses CRUD (Create, Read, Update, Delete)  
✅ Enroll students into courses  
✅ View enrollments from both sides:
- Student detail → enrolled courses
- Course detail → enrolled students  
✅ Assign and update grades  
✅ Remove enrollments  


# Screenshot
![alt text](<Screenshot from 2026-02-25 07-57-59.png>)
![alt text](<Screenshot from 2026-02-25 07-58-36.png>)
# Licences
This project is MT licenced 

# Author 
Robert Mmasi
- Penina Wanyama  
- Samuel Wanjau  
- Sharon Ouko  
- Sylvana Wanjiru  


Software Engineering Students
