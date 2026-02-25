// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

export default function Home() {
  const [studentCount, setStudentCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3002/students")
      .then((res) => res.json())
      .then((data) => setStudentCount(data.length))
      .catch(() => {});

    fetch("http://localhost:3002/courses")
      .then((res) => res.json())
      .then((data) => setCourseCount(data.length))
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-12">

      {/* HEADLINE SECTION */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Student Course Management System
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Manage students and courses efficiently. 
          Add, search, update and maintain accurate academic records in one centralized system.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link to="/students">
            <Button color="blue">
              Students ({studentCount})
            </Button>
          </Link>

          <Link to="/courses">
            <Button color="green">
              Courses ({courseCount})
            </Button>
          </Link>
        </div>
      </div>

      {/* RECORDS SECTION */}
      <section className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border bg-white p-6 shadow text-center">
          <h3 className="font-semibold text-lg">Student Records</h3>
          <p className="text-3xl font-bold mt-3">{studentCount}</p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow text-center">
          <h3 className="font-semibold text-lg">Course Records</h3>
          <p className="text-3xl font-bold mt-3">{courseCount}</p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow text-center">
          <h3 className="font-semibold text-lg">Fast Access</h3>
          <p className="text-sm text-gray-600 mt-3">
            Quickly search and update student & course records.
          </p>
        </div>

      </section>
        {/* SYSTEM DESCRIPTION SECTION */}
<section className="space-y-6">

  <div className="bg-white p-8 rounded-3xl shadow border space-y-4">
    <h2 className="text-2xl font-bold">How the System Works</h2>

    <ul className="space-y-3 text-gray-700">
      <li>
        <span className="font-semibold">Maintain Records:</span> 
        Store and manage student records with minimal errors and avoid duplication.
      </li>

      <li>
        <span className="font-semibold">Manage Courses:</span> 
        Create, update, and view course details including fees and duration.
      </li>

      <li>
        <span className="font-semibold">Enrollment Support:</span> 
        Track student enrollment using course codes for accurate registration.
      </li>

      <li>
        <span className="font-semibold">Reduce Paperwork:</span> 
        Move from manual processing to a clean, organized digital workflow.
      </li>
    </ul>
  </div>

  
  <div className="bg-white p-8 rounded-3xl shadow border space-y-4">
    <h2 className="text-2xl font-bold">Quick Actions</h2>

    <p className="text-gray-600">
      Register students and courses quickly using the system tools below.
    </p>

    <div className="flex gap-4 pt-2">
      <Link to="/students/new">
        <Button color="blue">Add Student</Button>
      </Link>

      <Link to="/courses/new">
        <Button color="green">Add Course</Button>
      </Link>
    </div>
  </div>


  <div className="bg-white p-8 rounded-3xl shadow border space-y-3">
    <h2 className="text-2xl font-bold">Project Goal</h2>

    <p className="text-gray-700">
      The goal of this Student Course Management System is to provide a simple, 
      reliable, and efficient platform for managing academic records digitally. 
      It improves data accuracy, reduces administrative workload, and enhances 
      overall record organization.
    </p>
  </div>

</section>  


    </div>
  );
}