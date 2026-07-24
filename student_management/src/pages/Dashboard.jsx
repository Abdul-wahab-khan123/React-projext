import { useState } from "react";
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Sidebar from '../components/sidebar'
import Layout from '../layouts/Layout'

const Dashboard = () => {
  return (
    <>
       <Layout>
          <Stats />
       </Layout>
    </>
  )
}

export default Dashboard
