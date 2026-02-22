import Layout from "../components/Layout";
import StudentForm from "../components/StudentForm";
import { addStudent } from "../services/api";
import toast from "react-hot-toast";

export default function AddStudentPage() {
    const handleSubmit = async (data) => {
        await addStudent(data);
        toast.success("Student added")
    };

    return (
    
            <StudentForm onSubmit={handleSubmit} />
    
    );
}