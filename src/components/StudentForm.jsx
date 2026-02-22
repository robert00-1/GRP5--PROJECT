import { useState } from "react";
import Button from "./Button";

export default function StudentForm({onSubmit }) {
    const [ form, setForm] = useState({
        name: "",
        email: "",
        age:"",
        courseId: ""
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        setForm({name: "", email: "", age: "", courseId:""});
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
           <input 
           className="w-full border p-2 rounded"
           name="name"
           placeholder="Student Name"
           value={form.name}
           onChange={handleChange}
           required
           /> 

           <input name="email"
           placeholder="Email"
           value={form.email}
           onChange={handleChange}
           className="w-full border p-2 rounded"
           />
           <input 
           className="w-full border p-2 rounded"
           name="age"
           placeholder="Age"
           value={form.age}
           onChange={handleChange}
           required
           />
           <input 
           name="courseId"
           placeholder="Course ID"
           value={form.courseId}
           onChange={handleChange}
           required

           />
           <Button type="submit" color="green">Add Student</Button>
        </form>
    );
}