import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Newsletter from "../components/Newsletter";
import Policy from "../components/Policy";
import Collection from "./Collection";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Collection />
      <Policy />
      <Newsletter />
    </div>
  );
};

export default Home;
