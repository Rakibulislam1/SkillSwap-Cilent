import { Link, useLoaderData } from "react-router-dom";
import { FaLocationDot, FaLocationArrow } from "react-icons/fa6";

const Services = () => {
  const allServicesData = useLoaderData();

  
  return (
    <>
      <div className="shadow-2xl my-10 bg-gradient-to-r from-[#6345ED] to-[#DC39FC] mx-auto p-5 rounded-3xl lg:w-2/3">
        <div className="flex lg:flex-row flex-col items-center lg:gap-20 justify-center">
          <div className="mb-3">
            <h2 className="text-xl font-semibold lg:text-start text-center text-white">
              SkillSwap
            </h2>
            <p className="text-white text-center text-sm">
              Search your product by service name
            </p>
          </div>
          <div className="relative flex items-center justify-end">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="input input-bordered rounded-full py-3 px-5 md:w-[380px] w-[350px]"
            />
            <div className="flex rounded-full mr-2 px-4 py-2 items-center gap-2 bg-gradient-to-r from-[#6345ED] to-[#DC39FC] absolute ">
              <FaLocationArrow className="text-white"></FaLocationArrow>
              <p className="text-white font-semibold">Browse More</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div>
          <h2 className="text-center my-10 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">
            Our All Services
          </h2>
          <div className="grid grid-cols-1 gap-5 px-2 mb-10">
            {allServicesData.map((allServices) => (
              <div key={allServices._id}>
                <div className="relative hover:shadow-xl flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                      src={allServices.service_img}
                      alt="image"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="block mb-2 font-sans text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {allServices.service_name}
                    </h4>
                    <p className="block mb-8 text-pink-500 font-sans text-base antialiased font-normal leading-relaxed">
                      {allServices.service_des.length > 100
                        ? allServices.service_des.slice(0, 100)
                        : allServices.service_des}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center justify-end space-x-4">
                        <div>
                          <img
                            className="w-10 h-10 rounded-full border-2 border-rounded border-green-500"
                            src={allServices.provider_img}
                            alt=""
                          />
                        </div>
                        <div className="font-medium dark:text-white">
                          <div>{allServices.provider_name}</div>
                        </div>
                      </div>
                      <p className="font-medium">
                        ${allServices.service_price}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      <FaLocationDot className="text-pink-500"></FaLocationDot>
                      <h4 className="text-sm text-pink-500">
                        {allServices.service_location}
                      </h4>
                    </div>

                    <Link to={`/singleService/${allServices._id}`} className="inline-block mt-5">
                      <button
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                      >
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
