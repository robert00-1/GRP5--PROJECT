import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> 

      
      <main className="flex-1 container mx-auto p-6">
        <Outlet /> 
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        &copy; 2026 Student Management System
      </footer>
    </div>
  );
}