import { FaLocationArrow } from "react-icons/fa6";
const MailSection = () => {
  return (
    <div className="shadow-2xl my-10 bg-gradient-to-r from-[#6345ED] to-[#DC39FC] mx-auto lg:p-10 p-5 rounded-3xl lg:w-2/3">
      <div className="flex lg:flex-row flex-col items-center lg:gap-20 justify-center">
        <div className="mb-3">
          <h2 className="text-xl font-semibold lg:text-start text-center text-white">Newsletters</h2>
          <p className="text-white text-center text-sm">Most popular offline home services website </p>
        </div>
        <div className="relative flex items-center justify-end">
          <input
            type="text"
            placeholder="Enter Email Address"
            className="input input-bordered rounded-full py-3 px-5 md:w-[380px] w-[350px]"
          />
          <div className="flex rounded-full mr-1 px-4 py-2 items-center gap-2 bg-gradient-to-r from-[#6345ED] to-[#DC39FC] absolute ">
            <FaLocationArrow className="text-white"></FaLocationArrow>
            <p className="text-white font-semibold">Browse More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailSection;
