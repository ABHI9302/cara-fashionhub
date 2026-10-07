import React from 'react'
import Hero from '../Sections/Hero'
import FeaturesDetails from '../Components/FeaturesDetails'
import FeaturedProducts from '../Sections/FeaturedProducts'
import ExploreMore from '../Sections/ExploreMore'
import NewArrivals from '../Sections/NewArrivals'
import SalesCard from '../Sections/SalesCard'
import NewCollection from '../Sections/NewCollection'
import Newsletter from '../Sections/Newsletter'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturesDetails />
      <FeaturedProducts />
      <ExploreMore />
      <NewArrivals />
      <SalesCard />
      <NewCollection />
    </div>
  )
}

export default Home