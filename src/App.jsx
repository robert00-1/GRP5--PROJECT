import { Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import AddCourse from "./pages/AddCourse";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import { Toaster } from "react-hot-toast";
import AddStudentPage from "./pages/AddStudent";
import AddCoursePage from "./pages/AddCourse";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetail />} />
          <Route path="course/new" element={<AddCoursePage />} />
          <Route path="students" element={<Students />} />
          <Route path="students/new" element={<AddStudentPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;