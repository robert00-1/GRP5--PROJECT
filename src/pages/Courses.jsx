// src/pages/Courses.jsx
import { useState, useEffect } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    code: "",
    title: "",
    duration: "",
    fee: "",
  });

  const fetchCourses = () => {
    fetch("http://localhost:3002/courses")
      .then((res) => res.json())
      .then(setCourses)
      .catch(console.error);
  };

  useEffect(() => fetchCourses(), []);

  const handleDelete = (id) => {
    if (window.confirm("Delete this course?")) {
      fetch(`http://localhost:3002/courses/${id}`, { method: "DELETE" })
        .then(fetchCourses)
        .catch(console.error);
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course.id);
    setFormData({
      code: course.code || `C-${course.id}`,
      title: course.title,
      duration: course.duration,
      fee: course.fee,
    });
  };

  const handleSave = () => {
    fetch(`http://localhost:3002/courses/${editingCourse}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setEditingCourse(null);
        fetchCourses();
      })
      .catch(console.error);
  };

  const filteredCourses = courses.filter(
    (c) =>
      (c.title?.toLowerCase() + (c.code || "").toLowerCase()).includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Course Management</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by code or title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      {/* Courses Table */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th>#</th>
            <th>Code</th>
            <th>Title</th>
            <th>Duration</th>
            <th>Fee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((c, i) => (
            <tr key={c.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{i + 1}</td>
              <td className="border px-4 py-2">{c.code || `C-${c.id}`}</td>
              <td className="border px-4 py-2">{c.title}</td>
              <td className="border px-4 py-2">{c.duration}</td>
              <td className="border px-4 py-2">${c.fee}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  className="px-2 py-1 bg-green-600 text-white rounded"
                  onClick={() => handleEdit(c)}
                >
                  Edit
                </button>
                <button
                  className="px-2 py-1 bg-red-600 text-white rounded"
                  onClick={() => handleDelete(c.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Inline Edit Form */}
      {editingCourse && (
        <div className="mt-6 p-4 border rounded shadow bg-white">
          <h2 className="text-xl font-bold mb-2">Edit Course</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Code"
              value={formData.code}
              onChange={(e) => setFormData({ ...formData, code: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Duration"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Fee"
              value={formData.fee}
              onChange={(e) => setFormData({ ...formData, fee: Number(e.target.value) })}
              className="p-2 border rounded"
            />
          </div>

          <div className="mt-4 space-x-2">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded"
              onClick={() => setEditingCourse(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}