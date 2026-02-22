import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

// React Icons
import {
  FaUsers,
  FaBookOpen,
  FaGraduationCap,
  FaTachometerAlt,
  FaArrowRight,
  FaDatabase,
} from "react-icons/fa";

export default function Home() {
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3002/students")
      .then((res) => res.json())
      .then((data) => setStudentCount(data.length))
      .catch((err) => console.error("Failed to fetch students:", err));
  }, []);

  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <h1 className="text-3xl font-bold">Welcome to SMS</h1>

      {/* ========================= HERO SECTION ========================= */}
      <section className="rounded-3xl border bg-white p-6 md:p-10 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left Side */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <FaTachometerAlt size={30} />
              Student Course Management System (SCMS)
            </p>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Manage students, courses, and enrollments in one place.
            </h1>

            <p className="text-gray-600 max-w-2xl">
              Register students and courses, enroll learners, assign grades, and
              keep records consistent without spreadsheets or manual paperwork.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link to="/students">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  <span className="inline-flex items-center gap-2">
                    <FaUsers size={16} />
                    View Students ({studentCount})
                    <FaArrowRight size={16} />
                  </span>
                </Button>
              </Link>

              <Link to="/courses">
                <Button className="bg-green-600 text-white hover:bg-green-700">
                  <span className="inline-flex items-center gap-2">
                    <FaBookOpen size={16} />
                    View Courses
                    <FaArrowRight size={16} />
                  </span>
                </Button>
              </Link>

              <Link to="/about">
                <Button className="bg-gray-800 text-white hover:bg-gray-900">
                  <span className="inline-flex items-center gap-2">
                    <FaGraduationCap size={16} />
                    About SCMS
                    <FaArrowRight size={16} />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-2 gap-3 w-full md:w-[360px]">
            <div className="rounded-2xl border p-4">
              <div className="flex items-center gap-2">
                <FaUsers size={16} />
                <p className="font-semibold">Student Records</p>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Total students: {studentCount}
              </p>
            </div>

            <div className="rounded-2xl border p-4">
              <div className="flex items-center gap-2">
                <FaBookOpen size={16} />
                <p className="font-semibold">Course Catalog</p>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Manage courses and credits easily.
              </p>
            </div>

            <div className="rounded-2xl border p-4">
              <div className="flex items-center gap-2">
                <FaGraduationCap size={16} />
                <p className="font-semibold">Enrollments</p>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Enroll students and track grades.
              </p>
            </div>

            <div className="rounded-2xl border p-4">
              <div className="flex items-center gap-2">
                <FaDatabase size={16} />
                <p className="font-semibold">React + JSON Server</p>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Fast demo backend for development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= FEATURE SECTION ========================= */}
      <section className="grid gap-4 md:grid-cols-3">
        {/* Students Feature Card */}
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <FaUsers size={20} />
            <h2 className="text-lg font-semibold">Students</h2>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Add student profiles with registration number, year of study, and
            contact information.
          </p>
          <div className="pt-4">
            <Link to="/add-student">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <span className="inline-flex items-center gap-2">
                  <FaUsers size={16} />
                  Add Student
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Courses Feature Card */}
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <FaBookOpen size={20} />
            <h2 className="text-lg font-semibold">Courses</h2>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Create course units with code, title, and credits. Edit or remove
            outdated courses anytime.
          </p>
          <div className="pt-4">
            <Link to="/add-course">
              <Button className="bg-green-600 text-white hover:bg-green-700">
                <span className="inline-flex items-center gap-2">
                  <FaBookOpen size={16} />
                  Add Course
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Enrollment Feature Card */}
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <FaGraduationCap size={20} />
            <h2 className="text-lg font-semibold">Enroll & Grade</h2>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Enroll students into courses and assign grades. View everything from
            student or course pages.
          </p>
          <div className="pt-4">
            <Link to="/students">
              <Button className="bg-gray-800 text-white hover:bg-gray-900">
                <span className="inline-flex items-center gap-2">
                  <FaGraduationCap size={16} />
                  Start Enrolling
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}