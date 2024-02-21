import Head from 'next/head';
import React from 'react';
import Navbar from '../components/shared/Navbar';
import Banner from '../components/home/Banner';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import Technologies from '../components/home/Technologies';
import Appointment from '../components/home/Appointment';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import Footer from '../components/shared/Footer';
import Certifications from '../components/home/Certifications';

const Home = () => {
  return (
    <div>
      <Head>
        <title>CoderSquad</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar/>
      <Banner />
      <Certifications/>
      <Services />
      <Technologies/>
      <FAQ />
      <Projects/>
      <Appointment />
      <Testimonials />
      <Footer/>
    </div>
  );
};

export default Home;