import React from 'react'
import Layout from '../layout/Layout'
import InnerBanner from '../components/InnerBanner'
import PrivacyContent from '../components/PrivacyContent'

const PrivacyPolicy = () => {
    return (
        <Layout>
            <InnerBanner title="Privacy Policy" homepage="Home" innerpage="Privacy Policy" />
            <PrivacyContent />
        </Layout>
    )
}

export default PrivacyPolicy