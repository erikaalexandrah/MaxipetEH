import React from 'react';
import Head from 'next/head';
import Navbar from "../components/navbar/navbar"
import Carousel from '../components/carousel/carousel';
import PanelCategories from '../components/ladingPagePanels/panelCategories/panelCategories';
import FeaturedProducts from '../components/ladingPagePanels/featuredProducts/featuredProducts';
import PopularProducts from '../components/ladingPagePanels/popularProducts/popularProducts';
import LatestProducts from '../components/ladingPagePanels/lastestProducts/lastestProducts';
import ServicesPanel from '../components/ladingPagePanels/servicesPanel/servicesPanel';
import BrandPanel from '../components/ladingPagePanels/brandPanel/branPanel';
import Footer from '../components/footer/footer';

function HomePage() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"/>
      </Head>
      <div className="App">
        <Navbar />
        <Carousel />
        <PanelCategories />
        <FeaturedProducts />
        <PopularProducts />
        <LatestProducts />
        <ServicesPanel />
        <BrandPanel />
        <Footer/>




      </div>
    </>
  );
}

export default HomePage;

