const BASE_URL = "http://localhost:3002";

// STUDENTS
export const getStudents = async () => {
  const res = await fetch(`${BASE_URL}/students`);
  return res.json(); 
};

export const deleteStudent = async (id) => {
  await fetch(`${BASE_URL}/students/${id}`, { method: "DELETE" });
};

export const addStudent = async (student) => {
  await fetch(`${BASE_URL}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
};

// COURSES
export const getCourses = async () => {
  const res = await fetch(`${BASE_URL}/courses`);
  return res.json();  
};

export const getCourse = async (id) => {
  const res = await fetch(`${BASE_URL}/courses/${id}`);
  return res.json();
};

export const deleteCourse = async (id) => {
  await fetch(`${BASE_URL}/courses/${id}`, { method: "DELETE" });
};

export const addCourse = async (course) => {
  await fetch(`${BASE_URL}/courses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(course),
  });
};