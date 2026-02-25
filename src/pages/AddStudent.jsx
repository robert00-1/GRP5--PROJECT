
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [regNo, setRegNo] = useState("");
  const [year, setYear] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3002/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to fetch courses:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const course = courses.find((c) => c.id === courseId)?.title || "";

    fetch("http://localhost:3002/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, regNo, year, course }),
    })
      .then(() => {
        alert("Student added!");
        navigate("/students");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        placeholder="Reg No"
        value={regNo}
        onChange={(e) => setRegNo(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />

      <select
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
        required
        className="w-full p-2 border rounded"
      >
        <option value="">Select Course</option>
        {courses.map((c) => (
          <option key={c.id} value={c.id}>
            {c.title} ({c.duration})
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Student
      </button>
    </form>
  );
}       