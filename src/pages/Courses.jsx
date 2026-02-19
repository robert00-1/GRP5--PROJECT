import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import toast from "react-hot-toast";

function Courses() {
  const [courses, setCourses] = useState([]);

  // Fetch courses
  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch(() => toast.error("Failed to load courses"));
  }, []);

  // Delete course
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/courses/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCourses(courses.filter((course) => course.id !== id));
        toast.success("Course deleted successfully");
      })
      .catch(() => toast.error("Delete failed"));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        All Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
