import React from 'react'
import Layout from '../Layout/Layout'
import InnerBanner from '../components/InnerBanner'
import ContactSection from '../components/ContactSection'

const Contact = () => {
  return (
    <div>
        <Layout>
           <InnerBanner title="Contact Sneakers" homepage="Home" innerpage="Contact" />
            <ContactSection />
        </Layout>
    </div>
  )
}

export default Contact
