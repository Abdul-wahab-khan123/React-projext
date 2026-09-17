import React from 'react'
import Layout from '../layout/Layout'
import InnerBanner from '../components/InnerBanner'
import TermsContent from '../components/TermsContent'

const TermsConditions = () => {
  return (
    <Layout>
      <InnerBanner title="Terms & Conditions" homepage="Home" innerpage="Terms & Conditions" />
      <TermsContent />
    </Layout>
  )
}

export default TermsConditions
