import Hero from "../Hero";
import FeatureDestination from "@/components/featureDestination";
import ExclusiveOffers from "@/components/exclusiveoffers"; 
import RecommendedHotels from "@/components/pages/HotelOwner/Recommendedhotel";

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
