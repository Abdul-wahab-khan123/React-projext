import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Student from './pages/Student';

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/student' element={<Student />} />
      </Routes>
    </>
  )
};

export default App

// student-management/

// src/

// ├── assets/
// │
// ├── components/
// │   ├── StudentForm.jsx
// │
// ├── pages/
// │   └── Home.jsx
// │
// ├── styles/
// │   └── style.css
// │
// ├── App.jsx
// └── main.jsx
