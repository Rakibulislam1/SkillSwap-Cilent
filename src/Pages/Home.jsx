import Banner from "../Components/Banner";
import PopularService from "../Components/PopularService";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto">
          <PopularService></PopularService>
        </div>
      </div>
    </div>
  );
};

export default Home;
