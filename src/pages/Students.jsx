import { useState, useEffect } from "react";
import { getStudents, deleteStudent } from "../services/api";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch students. Please check if the server is running.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      setStudents(students.filter((s) => s.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete student.");
    }
  };

  if (loading) return <p className="text-gray-600">Loading students...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!students.length) return <p className="text-gray-600">No students found.</p>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
      <h2>Students List</h2>
      <Link to="/students/new">
      <Button color="blue">Add Student</Button>
      </Link>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <div key={student.id}
          className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <p className="text-gray-600 text-sm">{student.email}</p>
            <p className="text-gray-500 text-xs mt-1">Year: {student.year}</p>
            <div className="flex gap-2 mt-4">
        
              <Button color="red" onClick={() => handleDelete(student.id)}>Delete</Button>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Students;