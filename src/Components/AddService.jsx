import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddService = () => {
  const { user } = useAuth();
  const addService = useLoaderData();

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const service_img = form.service_img.value;
    const service_name = form.service_name.value;
    const provider_name = form.provider_name.value;
    const service_provider_email = form.service_provider_email.value;
    const service_price = form.service_price.value;
    const service_location = form.service_location.value;
    const service_des = form.service_des.value;
    const provider_img = addService.provider_name;
    const services = {
      service_img,
      service_name,
      provider_name,
      service_provider_email,
      service_price,
      service_location,
      service_des,
      provider_img,
    };
    console.log(services);

    fetch("http://localhost:5000/api/v1/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Service Added successfully!");
        }
      });
  };

  return (
    <div className="my-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SwapSkill | Add-Service</title>
      </Helmet>
      <div className="flex justify-center">
        <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <form onSubmit={handleAddService} className="card-body">
            <div className="flex justify-center gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered w-72"
                  required
                  name="service_img"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service name</span>
                </label>
                <input
                  type="text"
                  placeholder="Service Name"
                  className="input input-bordered w-72"
                  required
                  name="service_name"
                />
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-72"
                  defaultValue={user?.displayName}
                  required
                  disabled
                  name="provider_name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your email</span>
                </label>
                <input
                  type="text"
                  placeholder="Your email"
                  className="input input-bordered w-72"
                  defaultValue={user?.email}
                  required
                  disabled
                  name="service_provider_email"
                />
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-72"
                  required
                  name="service_price"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service area</span>
                </label>
                <input
                  type="text"
                  placeholder="Service area"
                  className="input input-bordered w-72"
                  required
                  name="service_location"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Description</span>
              </label>
              <input
                type="text"
                placeholder="Service description"
                className="input input-bordered w-full"
                required
                name="service_des"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Add your service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
