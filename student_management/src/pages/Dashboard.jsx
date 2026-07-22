import React from 'react'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Sidebar from '../components/sidebar'

const Dashboard = () => {
  return (
    <>
        <div className='flex'>
            <div className='w-[20%]'>
                <Sidebar />
            </div>
            <div className='w-[80%]'>
                <Navbar />
                <Stats />
            </div>
        </div>
    </>
  )
}

export default Dashboard
