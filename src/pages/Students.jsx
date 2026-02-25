
import { useState, useEffect } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    regNo: "",
    year: "",
    course: ""
  });

  // Fetch students
  const fetchStudents = () => {
    fetch("http://localhost:3002/students")
      .then((res) => res.json())
      .then(setStudents)
      .catch(console.error);
  };

  useEffect(() => fetchStudents(), []);

  // Delete student
  const handleDelete = (id) => {
    if (window.confirm("Delete this student?")) {
      fetch(`http://localhost:3002/students/${id}`, { method: "DELETE" })
        .then(fetchStudents)
        .catch(console.error);
    }
  };

  
  const handleEdit = (student) => {
    setEditingStudent(student.id);
    setFormData({
      name: student.name,
      email: student.email,
      regNo: student.regNo,
      year: student.year,
      course: student.course
    });
  };

  
  const handleSave = () => {
    fetch(`http://localhost:3002/students/${editingStudent}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(() => {
        setEditingStudent(null);
        fetchStudents();
      })
      .catch(console.error);
  };

  
  const filteredStudents = students.filter((s) =>
    (s.name?.toLowerCase() + s.email?.toLowerCase()).includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Student Management</h1>

    
      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Reg No</th>
            <th>Year</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((s, i) => (
            <tr key={s.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{i + 1}</td>
              <td className="border px-4 py-2">{s.name}</td>
              <td className="border px-4 py-2">{s.email}</td>
              <td className="border px-4 py-2">{s.regNo}</td>
              <td className="border px-4 py-2">{s.year}</td>
              <td className="border px-4 py-2">{s.course}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  className="px-2 py-1 bg-green-600 text-white rounded"
                  onClick={() => handleEdit(s)}
                >
                  Edit
                </button>
                <button
                  className="px-2 py-1 bg-red-600 text-white rounded"
                  onClick={() => handleDelete(s.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      {editingStudent && (
        <div className="mt-6 p-4 border rounded shadow bg-white">
          <h2 className="text-xl font-bold mb-2">Edit Student</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Reg No"
              value={formData.regNo}
              onChange={(e) => setFormData({ ...formData, regNo: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Year"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Course"
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
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
              onClick={() => setEditingStudent(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}