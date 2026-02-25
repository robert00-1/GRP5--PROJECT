import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import AddCourse from "./pages/AddCourse";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home & About */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          
          <Route path="courses" element={<Courses />} />           
          <Route path="courses/new" element={<AddCourse />} />     
          <Route path="courses/:id" element={<AddCourse />} />     
          <Route path="courses/detail/:id" element={<CourseDetail />} />

          
          <Route path="students" element={<Students />} />         
          <Route path="students/new" element={<AddStudent />} />   
          <Route path="students/:id" element={<AddStudent />} />   
        </Route>
      </Routes>
    </>
  );
}

export default App;