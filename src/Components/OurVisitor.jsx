import CountUp from "react-countup";

const OurVisitor = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#6345ED] to-[#DC39FC] shadow-2xl mb-10">
        <div className="grid md:grid-cols-3">
          <div className="py-20 text-center">
            <h2 className="text-xl font-semibold text-white">Our Clients</h2>
            <div className="text-center text-lg font-semibold text-white flex justify-center">
              <CountUp end={17750} duration={5.75}/>
              <p className="ml-1">+</p>
            </div>
          </div>
          
          <div className="py-20 text-center">
            <h2 className="text-xl font-semibold text-white">Our Service Providers </h2>
            <div className="text-center text-lg font-semibold text-white flex justify-center">
              <CountUp end={100000} duration={5.75}/>
              <p className="ml-1">+</p>
            </div>
          </div>

          <div className="py-20 text-center">
            <h2 className="text-xl font-semibold text-white">Our Visitors</h2>
            <div className="text-center text-lg font-semibold text-white flex justify-center">
              <CountUp end={200000} duration={5.75}/>
              <p className="ml-1">+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVisitor;
