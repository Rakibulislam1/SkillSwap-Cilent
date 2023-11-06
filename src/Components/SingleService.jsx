
import { Modal } from "flowbite-react";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";

const SingleService = () => {
  const singleServiceData = useLoaderData();
  const { id } = useParams();
  const singleService = singleServiceData.find((service) => service._id == id);

  // const { user } = useAuth();

  const [openModal, setOpenModal] = useState(false);
  // const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    // setEmail("");
  }
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <div>
          <div className="grid grid-cols-1 gap-5 px-2 mb-10">
            <div className="relative hover:shadow-xl flex w-full lg:flex-row flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative lg:w-2/5 w-full m-0 overflow-hidden text-gray-700 bg-white lg:rounded-r-none rounded shrink-0 rounded-xl bg-clip-border">
                <img
                  src={singleService.service_img}
                  alt="image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h4 className="block mb-2 font-sans text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {singleService.service_name}
                </h4>
                <p className="block mb-8 text-pink-500 font-sans text-base antialiased font-normal leading-relaxed">
                  {singleService.service_des}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-end space-x-4">
                    <div>
                      <img
                        className="w-10 h-10 rounded-full border-2 border-rounded border-green-500"
                        src={singleService.provider_img}
                        alt=""
                      />
                    </div>
                    <div className="font-medium dark:text-white">
                      <div>{singleService.provider_name}</div>
                    </div>
                  </div>
                  <p className="font-medium">${singleService.service_price}</p>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <FaLocationDot className="text-pink-500"></FaLocationDot>
                  <h4 className="text-sm text-pink-500">
                    {singleService.service_location}
                  </h4>
                </div>

                <Link
                  onClick={() => setOpenModal(true)}
                  className="inline-block mt-5"
                  href="#"
                >
                  <button
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Book Now
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
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <Modal show={openModal} onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form className="flex justify-center items-center gap-5 w-full" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border w-72 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
                required=""
                // onBlur={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border w-72 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                // onBlur={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleService;
