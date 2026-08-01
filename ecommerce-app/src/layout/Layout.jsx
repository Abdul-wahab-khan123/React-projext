import React, { Children } from 'react'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />

            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}

export default Layout
