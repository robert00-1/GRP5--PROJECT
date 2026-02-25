// src/pages/AddCourse.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AddCourse() {
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    title: "",
    description: "",
    duration: "",
    fee: "",
    instructor: "",
    credits: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3002/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course)
      });

      if (res.ok) {
        toast.success("Course added successfully!");
        navigate("/courses");
      } else {
        toast.error("Failed to add course.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error connecting to server.");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={course.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Course Description"
          value={course.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 3 Months)"
          value={course.duration}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          name="fee"
          placeholder="Fee"
          value={course.fee}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="instructor"
          placeholder="Instructor Name"
          value={course.instructor}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          name="credits"
          placeholder="Credits"
          value={course.credits}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}