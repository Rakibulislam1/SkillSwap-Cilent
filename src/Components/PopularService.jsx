// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularService = () => {
  // const axios = useAxi

  // const getServices = () => {

  // }

  // const query = useQuery({
  //   queryKey : ['service'],
  //   queryFn : []
  // })
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/services")
      .then((response) => response.json())
      .then((data) => setPopular(data));
  }, []);

  return (
    <div>
      <h2 className="text-center my-10 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">
        Popular Services
      </h2>
      <div className="grid lg:grid-cols-2 gap-5 px-2">
        {/* <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h6 className="block mb-4 uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">
              startups
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Lyft launching cross-platform service this week
            </h4>
            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software
              company selling licenses. Yet its own business model disruption is
              only part of the story
            </p>

            <div className="flex justify-between items-center">
              <div className="flex items-center justify-end space-x-4">
                <div>
                  <img
                    className="w-10 h-10 rounded-full border-2 border-rounded border-green-500"
                    src={avatar}
                    alt=""
                  />
                </div>
                <div className="font-medium dark:text-white">
                  <div>Jese Leos</div>
                </div>
              </div>
              <p className="font-medium">$1000</p>
            </div>

            <a className="inline-block mt-5" href="#">
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
            </a>
          </div>
        </div> */}

        {popular.map((popularServices) => (
          <div key={popularServices._id}>
            <div className="relative hover:shadow-xl flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                <img
                  src={popularServices.service_img}
                  alt="image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h4 className="block mb-2 font-sans text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {popularServices.service_name}
                </h4>
                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                  {
                    popularServices.service_des.length > 100 ? popularServices.service_des.slice(0,100) : popularServices.service_des
                      
                    
                  }
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-end space-x-4">
                    <div>
                      <img
                        className="w-10 h-10 rounded-full border-2 border-rounded border-green-500"
                        src={popularServices.provider_img}
                        alt=""
                      />
                    </div>
                    <div className="font-medium dark:text-white">
                      <div>{popularServices.provider_name}</div>
                    </div>
                  </div>
                  <p className="font-medium">${popularServices.service_price}</p>
                </div>

                <Link to={`/singleService/${popularServices._id}`} className="inline-block mt-5" href="#">
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
  );
};

export default PopularService;
