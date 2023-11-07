import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
// import useAuth from "../Hooks/useAuth";

const SingleService = () => {
  const singleServiceData = useLoaderData();
  const { id } = useParams();
  const singleService = singleServiceData.find((service) => service._id == id);
  console.log(singleService);

  const { user } = useAuth();

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const service_price = form.service_price.value;
    const service_name = form.service_name.value;
    const service_img = form.service_img.value;
    const userEmail = form.userEmail.value;
    const service_provider_email = form.service_provider_email.value;
    const service_des = form.service_des.value;
    const date = form.date.value;
    const provider_name = singleService.provider_name;
    const booking = {
      service_price,
      date,
      service_name,
      service_img,
      userEmail,
      service_provider_email,
      service_des,
      provider_name,
    };
    console.log(booking);

    fetch("http://localhost:5000/api/v1/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Service booked successfully!");
        }
      });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SwapSkill | Single-Service</title>
      </Helmet>
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
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
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
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h1 className="font-bold text-xl">
            Service Provider & Service Details
          </h1>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 lg:grid-cols-2"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Service Name</span>
              </label>
              <input
                type="text"
                name="service_name"
                defaultValue={singleService.service_name}
                placeholder="Service Name"
                className="input input-bordered"
                disabled
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Service Image URL
                </span>
              </label>
              <input
                type="text"
                defaultValue={singleService.service_img}
                disabled
                placeholder="Image"
                name="service_img"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Service Provider Email
                </span>
              </label>
              <input
                type="email"
                disabled
                placeholder="Provider Email"
                name="service_provider_email"
                defaultValue={singleService.service_provider_email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">User Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                disabled
                placeholder="User Email"
                className="input input-bordered"
                required
                name="userEmail"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                type="text"
                defaultValue={singleService.service_price}
                placeholder="Price"
                className="input input-bordered"
                required
                disabled
                name="service_price"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Date</span>
              </label>
              <input
                type="date"
                placeholder="password"
                className="input input-bordered"
                required
                name="date"
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>
              <textarea
              disabled
                name="service_des"
                defaultValue={singleService.service_des}
                className="border-2 p-4 placeholder:text-gray-600 w-full"
                id=""
                cols="30"
                rows="6"
              ></textarea>
            </div>

            <div className="form-control lg:col-span-2 mt-6">
              <button type="submit" className="btn btn-primary">
                Purchase This Service
              </button>
            </div>
          </form>

          <div className="modal-action">
            <form className="mx-auto" method="dialog">
              <button className="btn">Order Later</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SingleService;
