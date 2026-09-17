import React from 'react'
import Layout from '../Layout/Layout'
import InnerBanner from '../components/InnerBanner'
import AboutStory from '../components/AboutStory'
import ShippingInfo from '../components/ShippingInfo'


const About = () => {
  return (
    <>
      <Layout>
        <InnerBanner title="About Sneakers" homepage="Home" innerpage="About" />
        <AboutStory />
        <ShippingInfo />
      </Layout>
    </>
  )
}

export default About
