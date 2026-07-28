import { useEffect , useState } from "react";
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Sidebar from '../components/sidebar'
import Layout from '../layouts/Layout'
import { Link} from "react-router-dom";
import { useNavigate} from "react-router-dom";

const AddStudent = () => {
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course: "",
        gender: "",
        status: "Active",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const oldStudents = JSON.parse(localStorage.getItem("students")) || [];

        const newStudent = {
            id : Date.now(),
            ...formData,
        }

        const updatedStudents = [...oldStudents,  newStudent];

        localStorage.setItem(
            "students" ,
             JSON.stringify(updatedStudents)
        );
        setFormData({
            name: "",
            email: "",
            course: "",
            gender: "",
            status: "Active",
        });
        navigate("/student");
    }

    return (
        <Layout>
            <div>
                <div className="bg-white rounded-xl shadow-lg p-7 border border-gray-200">
                    <h2 className='text-2xl text-black font-bold mb-6'>
                        Add New Student
                    </h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2 text-xs font-medium">
                                Student Name
                            </label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Student Name" className="w-full p-3 text-sm border border-gray-400 rounded-lg outline-none" required="" />
                        </div>
                        <div>
                            <label className="block mb-2 text-xs font-medium">
                                Email
                            </label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" className="w-full p-3 text-sm border border-gray-400 rounded-lg outline-none" required=""/>
                        </div>
                        <div>
                            <label className="block mb-2 text-xs font-medium">
                                Course
                            </label>
                            <select name="course" value={formData.course} onChange={handleChange} className="w-full border border-gray-400 rounded-lg p-3 text-sm outline-none" required="">
                                <option value="">Select Course</option>
                                <option value="React JS">React JS</option>
                                <option value="Node JS">Node JS</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-xs font-medium">
                                Gender
                            </label>
                            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border border-gray-400 rounded-lg p-3 text-sm outline-none" required="">
                                <option value="">select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-xs font-medium">
                                Status
                            </label>
                            <select name="status" value={formData.status} onChange={handleChange} className="w-full border border-gray-400 rounded-lg p-3 text-sm outline-none" required="">
                                <option value="">select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                        <div className="col-span-2 flex gap-4 mt-4">
                            <button type="submit" className="bg-yellow-500 text-white px-5 py-2 rounded-lg cursor-pointer">
                                Add Student
                            </button>
                            <Link to="/Student" className="bg-gray-400 text-white px-5 py-2 rounded-lg cursor-pointer">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default AddStudent
