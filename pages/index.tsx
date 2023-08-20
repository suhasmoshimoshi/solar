// pages/index.js

import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import WhySolar from '../components/WhySolar'
import Projects from '../components/Projects'
import CallToAction from '../components/CallToAction'
import EducationalContent from '../components/EducationalContent';
import ContactForm from '../components/ContactForm'
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <Layout>
      {/* Your page content */}
      <Hero />
      <AboutUs />
      <Services />
      <WhySolar />
      <Projects />
      <CallToAction />
      <EducationalContent/>
      <ContactForm />
      <Testimonials />
       
    
    </Layout>
  );
};

export default Home;
