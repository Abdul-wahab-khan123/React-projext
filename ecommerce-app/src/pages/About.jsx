import Layout from '../Layout/Layout'
import AboutBanner from '../components/AboutBanner'
import AboutStory from '../components/AboutStory'
import ShippingInfo from '../components/ShippingInfo'


const About = () => {
  return (
    <>
      <Layout>
        <AboutBanner />
        <AboutStory />
        <ShippingInfo />
      </Layout>
    </>
  )
}

export default About
