// import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../featureDestination'
import ExclusiveOffers from '../exclusiceoffers'
import RecommendedHotels from './HotelOwner/Recommendedhotel'

const Home = () => {
  return (
    <div>
      <Hero />
      <RecommendedHotels/>
      <FeatureDestination>
        <ExclusiveOffers />
      </FeatureDestination>
      <testimonials />
      <newsletter />

    </div>
  )
}

export default Home
