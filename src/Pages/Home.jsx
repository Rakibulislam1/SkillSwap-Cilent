import Banner from "../Components/Banner";
import MailSection from "../Components/MailSection";
import PopularService from "../Components/PopularService";
import WhyChooseUs from "../Components/WhyChooseUs";
import OurVisitor from "../Components/ourVisitor";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto">
          <PopularService></PopularService>
        </div>
        <OurVisitor></OurVisitor>
        <WhyChooseUs></WhyChooseUs>
        <div className="px-2">
          <MailSection></MailSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
