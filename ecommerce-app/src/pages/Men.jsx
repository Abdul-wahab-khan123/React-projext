import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../components/Hero'
import ShoesStyle from '../components/ShoesStyle'
import NewlyCollection from '../components/NewlyCollection'
import MostRecommend from '../components/MostRecommend'
import SummerCollection from '../components/SummerCollection'
import CTASection from '../components/CTASection'

const Men = () => {
  return (
    <>
      <Layout>
        <Hero />
        <ShoesStyle />
        <NewlyCollection />
        <MostRecommend />
        <SummerCollection />
        <CTASection />
      </Layout>
    </>
  )
}

export default Men
