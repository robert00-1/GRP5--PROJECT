import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          About Student Management System
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          The Student Management System (SMS) is a web-based application
          designed to help institutions manage students and courses efficiently.
          It replaces manual record-keeping systems with a digital platform
          that ensures data accuracy and easy access.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
           Project Objectives
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Create new student records</li>
          <li>Register and manage courses</li>
          <li>Update student and course information</li>
          <li>Delete student and course records</li>
          <li>Display all registered students and courses</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
           Technologies Used
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>React + Vite</li>
          <li>Tailwind CSS</li>
          <li>JSON Server (db.json)</li>
          <li>SweetAlert2</li>
          <li>React Hot Toast</li>
        </ul>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Developed as part of a web development project to demonstrate
            CRUD operations and deployment skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;