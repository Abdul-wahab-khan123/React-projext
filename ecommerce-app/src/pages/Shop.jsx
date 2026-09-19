import React from "react";
import Layout from "../layout/Layout";
import InnerBanner from "../components/InnerBanner";
import ShopDetail from "../components/ShopDetail";

const Shop = () => {
    
    return (

        <Layout>
            <InnerBanner title="Shop Sneakers" homepage="Home" innerpage="Shop"/>
            <ShopDetail />
        </Layout>
    );
};

export default Shop;
