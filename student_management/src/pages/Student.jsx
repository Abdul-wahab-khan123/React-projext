import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import StudentTable from '../components/StudentTable'
import { students } from "../data/students";
import Layout from '../layouts/Layout'

const Student = () => {
  return (
    <div>
      <Layout>
          <div className="bg-white px-5 py-5 rounded-xl shadow-lg border border-gray-200 w-full mt-4">
              <div className="flex items-center justify-between mb-5">
                  <SearchBar />
                  <Button />
              </div>
              <StudentTable students={students} />
          </div>
       </Layout>
    </div>
  )
}

export default Student
