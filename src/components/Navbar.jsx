import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
            <div className="text-xl font-bold">SMS</div>
            <div className="space-x-6">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/students" className="hover:underline">Students</Link>
                <Link to="/courses" className="hover:underline">Courses</Link>
                <Link to="/about" className="hover:underline">About</Link>
            </div>
        </nav>
    );
}