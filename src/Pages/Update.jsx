import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Update = () => {
  const { user } = useAuth();
  const [service, setService] = useState({});
  const data = useLoaderData();
  const { id } = useParams();
  console.log(data);
  useEffect(() => {
    const find = data?.find((service) => service?._id == id);
    setService(find);
  }, [data, id]);

  

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const service_img = form.service_img.value;
    const service_name = form.service_name.value;
    const provider_name = form.provider_name.value;
    const service_provider_email = form.service_provider_email.value;
    const service_price = form.service_price.value;
    const service_location = form.service_location.value;
    const service_des = form.service_des.value;
    const update = {
      service_img,
      service_name,
      provider_name,
      service_provider_email,
      service_price,
      service_location,
      service_des,
 
    };

    axios
      .put(`http://localhost:5000/api/v1/services/${id}`, update)
      .then((res) => {
        console.log(res.data);
        Swal.fire("Good job!", "Product Updated Successfully!", "success");
      });
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <form onSubmit={handleUpdate} className="card-body">
            <div className="flex justify-center gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  defaultValue={service.service_img}
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
                  defaultValue={service.service_name}
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
                  defaultValue={service.service_price}
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
                  defaultValue={service.service_location}
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
                defaultValue={service.service_des}
                required
                name="service_des"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
