import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CaseStudies from 'src/components/CaseStudies/CaseStudies'
import Features from 'src/components/Features/Features'
import HeroSection from 'src/components/HeroSection/HeroSection'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <HeroSection />
      <Features />
      <CaseStudies />
    </>
  )
}

export default HomePage
