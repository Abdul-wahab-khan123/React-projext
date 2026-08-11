import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../components/Hero'
import ShoesStyle from '../components/ShoesStyle'
import NewlyCollection from '../components/NewlyCollection'


const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <ShoesStyle />
        <NewlyCollection />
      </Layout>
    </>
  )
}

export default Home
