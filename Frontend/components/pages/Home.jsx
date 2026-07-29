import Hero from "../Hero";
import FeatureDestination from "../../components/featureDestination.jsx";
import ExclusiveOffers from "../../components/exclusiveoffers.jsx"; 
import RecommendedHotels from "../../components/pages/HotelOwner/Recommendedhotel.jsx";
import Testimonials from '../testimonials.jsx';
import Newsletter from '../newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <RecommendedHotels/>
      <FeatureDestination>
        <ExclusiveOffers />
      </FeatureDestination>
      <Testimonials />
      <Newsletter />

    </div>
  )
}

export default Home
