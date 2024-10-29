import {Link, navigate, routes} from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import CaseStudies from 'src/components/CaseStudies/CaseStudies'
import Features from 'src/components/Features/Features'
import HeroSection from 'src/components/HeroSection/HeroSection'
import React, {useEffect} from "react";
import {useAuth} from "src/auth";

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
