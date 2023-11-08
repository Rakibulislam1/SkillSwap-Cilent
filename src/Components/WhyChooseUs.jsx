import pic_247Call from "../../src/assets/Images/247.png";
import gloves from "../../src/assets/Images/gloves.png";
import mask from "../../src/assets/Images/mask.png";
import sanitized from "../../src/assets/Images/sanitized.png";
import whyChooseUs from "../../src/assets/Images/why-choose-us.svg";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#FAFBFC] pb-16">
      <h2 className="text-center pt-10 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">
        Why Choose Us
      </h2>
      <p className="text-center font-semibold text-lg">
        Because we care about your safety
      </p>
      <div className="flex lg:flex-row flex-col justify-center gap-20 items-center mx-auto max-w-7xl my-10">
        <div className="">
          <div className="flex flex-col md:flex-row gap-3 my-3">
            <div className="bg-white p-6 rounded-xl md:w-64 w-full">
              <div className="flex items-center">
                <h2 className="text-lg font-semibold">24/7 Support</h2>
                <img className="w-14 ml-5" src={pic_247Call} alt="" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl md:w-64 w-full">
              <div className="flex items-center">
                <h2 className="text-lg font-semibold">Ensuring Gloves</h2>
                <img className="w-14 ml-5" src={gloves} alt="" />
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="bg-white p-6 rounded-xl md:w-64 w-full">
              <div className="flex items-center">
                <h2 className="text-lg font-semibold">Ensuring Masks</h2>
                <img className="w-14 ml-5" src={mask} alt="" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl md:w-64 w-full">
              <div className="flex items-center">
                <h2 className="text-lg font-semibold">
                  Sanitising Hands & Equipment
                </h2>
                <img className="w-14 ml-5" src={sanitized} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="px-2 lg:px-0">
          <img className="rounded-lg w-full" src={whyChooseUs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
