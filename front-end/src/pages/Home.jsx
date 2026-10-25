import React from 'react'
import Hero from '../components/Hero'
import Title from '../components/Title'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'


const Home = () => {
  return (
    <div>
      <Hero />
    <LatestCollection />
    <BestSeller />
    <OurPolicy />
    <NewsletterBox />
    </div>
  )
}

export default Home