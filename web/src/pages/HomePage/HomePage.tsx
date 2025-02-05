import { Metadata } from '@redwoodjs/web'

import CaseStudies from 'src/components/CaseStudies/CaseStudies'
import Features from 'src/components/Features/Features'
import HeroSection from 'src/components/HeroSection/HeroSection'
import React from "react";

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <HeroSection />
      <Features />
      <CaseStudies />
    </>
  )
}

export default HomePage
