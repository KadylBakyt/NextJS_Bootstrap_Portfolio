"use client";

import Navbar from '@/components/layouts/navbar/Navbar';
import Footer from '@/components/layouts/footer/Footer';
import HeroSection from '@/components/sections/Hero';
import AboutSection from '@/components/sections/About';
import WorkSection from '@/components/sections/Work';
import ScrollToTopBtn from '@/components/common/scrollToTop/ScrollToTop';

export default function Home() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ScrollToTopBtn />
      <Footer />
    </>
  );
}