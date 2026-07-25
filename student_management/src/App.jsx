import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Student from './pages/Student';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/student' element={<Student />} />
          <Route path='/add-student' element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
      </Routes>
    </>
  )
};

export default App

// student-management/

// src
// │
// ├── assets
// │   ├── images
// │   └── icons
// │
// ├── components
// │   ├── Button.jsx
// │   ├── Input.jsx
// │   ├── SearchBar.jsx
// │   ├── Sidebar.jsx
// │   ├── Navbar.jsx
// │   ├── Stats.jsx
// │   ├── StudentTable.jsx
// │   ├── Select.jsx
// │   ├── Radio.jsx
// │   ├── TextArea.jsx
// │   ├── UploadImage.jsx
// │   ├── Card.jsx
// │   └── Modal.jsx
// │
// ├── layouts
// │   └── Layout.jsx
// │
// ├── pages
// │   ├── Dashboard.jsx
// │   ├── Student.jsx
// │   ├── AddStudent.jsx
// │   ├── EditStudent.jsx
// │   ├── Courses.jsx
// │   ├── Teachers.jsx
// │   ├── Attendance.jsx
// │   ├── Fees.jsx
// │   ├── Results.jsx
// │   └── Settings.jsx
// │
// ├── data
// │   ├── students.js
// │   ├── courses.js
// │   └── teachers.js
// │
// ├── App.jsx
// └── main.jsx
