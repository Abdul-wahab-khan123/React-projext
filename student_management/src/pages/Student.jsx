import { useState } from "react";
import { students as studentData } from "../data/Students";
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import StudentTable from '../components/StudentTable'
import Layout from '../layouts/Layout'

const Student = () => {
  
  const localStudents = JSON.parse(localStorage.getItem("students"));  
  const [students, setStudents] = useState(localStudents || studentData);
  const [search, setSearch] = useState("")
  const handleEdit = (id) => {
    const student = students.find((student) => student.id === id);
  }
  const handleDelete = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    )
    setStudents(updatedStudents)
    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    )
  }
  const filteredStudents = students.filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div>
      <Layout>
          <div className="bg-white px-5 py-5 rounded-xl shadow-lg border border-gray-200 w-full">
              <div className="flex items-center justify-between mb-5">
                  <SearchBar search={search} setSearch={setSearch} />
                  <Button />
              </div>
              <StudentTable students={filteredStudents} handleEdit={handleEdit} handleDelete={handleDelete} tableHeight="h-[390px]" />
          </div>
       </Layout>
    </div>
  )
}

export default Student
