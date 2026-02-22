import { useState, useEffect } from "react";
import { getCourses, deleteCourse } from "../services/api";
import { Link } from "react-router-dom"; // ← Make sure Link is imported
import Button from "../components/Button";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch courses. Please check if the server is running.");
      } finally {
        setLoading(false);
      }
    };

    fetchCoursesData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteCourse(id);
      setCourses(courses.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete course.");
    }
  };

  if (loading) return <p className="text-gray-600">Loading courses...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!courses.length) return <p className="text-gray-600">No courses found.</p>;

  return (
    <div className="p-6 space-y-6">

      {/* ===== Header with Add Course Button ===== */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Courses List</h2>
        <Link to="/course/new">
          <Button color="green">Add Course</Button>
        </Link>
      </div> 

      {/* ===== Courses Grid ===== */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div 
            key={course.id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <p className="text-gray-600 text-sm">({course.description})</p>
            <p className="text-gray-500 text-xs mt-1">Credits: {course.credits}</p>
            
            <div className="flex gap-2 mt-4">
              <Button color="red" onClick={() => handleDelete(course.id)}>Delete</Button>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
}

export default Courses;