import React from 'react'
import Layout from '../Layout/Layout'
import InnerBanner from '../components/InnerBanner'
import FaqAccordion from "../components/FaqAccordion";

const Faq = () => {
    return (
        <Layout>
           <InnerBanner title="Faqs Sneakers" homepage="Home" innerpage="Faqs" />
           <FaqAccordion />
        </Layout>
    )
}

export default Faq
