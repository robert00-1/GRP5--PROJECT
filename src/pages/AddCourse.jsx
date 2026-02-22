import Layout from "../components/Layout";
import CourseForm from "../components/CourseForm";
import { addCourse } from "../services/api"; 
import toast from "react-hot-toast";

export default function AddCoursePage() {
    const handleSubmit = async (data) => {
        await addCourse(data);
        toast.success("Course added")
    };

    return (
    
            <CourseForm onSubmit={handleSubmit} />
    
    );
}