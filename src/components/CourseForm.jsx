import { useState } from "react";
import Button from "./Button";

export default function CourseForm({ onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded max-w-lg mx-auto">
     <div className="flex flex-col">
      <label htmlFor="title" className="text-sm font-medium mb-1">Course Title</label>
    
      <input
        className="w-full border p-2 rounded"
        name="title"
        placeholder="Course Title"
        value={form.title}
        onChange={handleChange}
      />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="text-sm font-medium mb-1">
          Course Description
        </label>
      
      <textarea
        className="w-full border p-2 rounded"
        name="description"
        placeholder="Course Description"
        value={form.description}
        onChange={handleChange}
        rows={4}
      />
      </div>
      <Button type="submit" color="green">Add Course</Button> 
    </form>
  );
}