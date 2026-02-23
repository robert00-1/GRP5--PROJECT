import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

export default function Home() {
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3002/students")
      .then((res) => res.json())
      .then((data) => setStudentCount(data.length))
      .catch((err) => console.error("Failed to fetch students:", err));
  }, []);

  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold">Welcome to SMS</h1>

      {/* HERO SECTION */}
      <section className="rounded-3xl border bg-white p-6 md:p-10 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-600">
              Student Course Management System (SCMS)
            </p>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Manage students, courses, and enrollments in one place.
            </h1>

            <p className="text-gray-600 max-w-2xl">
              Register students and courses, enroll learners, assign grades,
              and keep records consistent without spreadsheets.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link to="/students">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-xl">
                  View Students ({studentCount})
                </Button>
              </Link>

              <Link to="/courses">
                <Button className="bg-green-600 text-white hover:bg-green-700 px-5 py-2 rounded-xl">
                  View Courses
                </Button>
              </Link>

              <Link to="/about">
                <Button className="bg-gray-800 text-white hover:bg-gray-900 px-5 py-2 rounded-xl">
                  About SCMS
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE INFO CARDS */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-[360px]">
            <div className="rounded-2xl border p-4">
              <p className="font-semibold">Student Records</p>
              <p className="text-xs text-gray-600 mt-1">
                Total students: {studentCount}
              </p>
            </div>

            <div className="rounded-2xl border p-4">
              <p className="font-semibold">Course Catalog</p>
              <p className="text-xs text-gray-600 mt-1">
                Manage courses and credits easily.
              </p>
            </div>

            <div className="rounded-2xl border p-4">
              <p className="font-semibold">Enrollments</p>
              <p className="text-xs text-gray-600 mt-1">
                Enroll students and track grades.
              </p>
            </div>

            <div className="rounded-2xl border p-4">
              <p className="font-semibold">React + JSON Server</p>
              <p className="text-xs text-gray-600 mt-1">
                Fast demo backend for development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-lg transition">
          <h2 className="text-lg font-semibold">Students</h2>
          <p className="text-gray-600 text-sm mt-2">
            Add student profiles with registration number and details.
          </p>
          <div className="pt-4">
            <Link to="/add-student">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-xl">
                Add Student
              </Button>
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-lg transition">
          <h2 className="text-lg font-semibold">Courses</h2>
          <p className="text-gray-600 text-sm mt-2">
            Create and manage course units with credits and codes.
          </p>
          <div className="pt-4">
            <Link to="/add-course">
              <Button className="bg-green-600 text-white hover:bg-green-700 px-5 py-2 rounded-xl">
                Add Course
              </Button>
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-lg transition">
          <h2 className="text-lg font-semibold">Enroll & Grade</h2>
          <p className="text-gray-600 text-sm mt-2">
            Enroll students into courses and assign grades easily.
          </p>
          <div className="pt-4">
            <Link to="/students">
              <Button className="bg-gray-800 text-white hover:bg-gray-900 px-5 py-2 rounded-xl">
                Start Enrolling
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}