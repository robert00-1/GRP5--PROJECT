import { Link } from "react-router-dom";

function CourseCard({ course, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {course.title}
      </h2>

      <p className="text-gray-600 mb-3">
        {course.description}
      </p>

      <p className="text-blue-600 font-semibold mb-4">
        Instructor: {course.instructor}
      </p>

      <div className="flex justify-between">
        <Link
          to={`/courses/${course.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          View
        </Link>

        <button
          onClick={() => onDelete(course.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
