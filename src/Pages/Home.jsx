import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import MailSection from "../Components/MailSection";
import PopularService from "../Components/PopularService";
import WhyChooseUs from "../Components/WhyChooseUs";
import OurVisitor from "../Components/ourVisitor";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skill-Swap | Home</title>
      </Helmet>
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
