import Button from "./Button";

export default function StudentCard({ student, courses, onDelete }) {
  const course = courses.find((c) => c.id === student.courseId);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold">{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Course: {course ? course.title : "Not assigned"}</p>

      <div className="mt-3">
        <Button text="Delete" color="red" onClick={() => onDelete(student.id)} />
      </div>
    </div>
  );
}