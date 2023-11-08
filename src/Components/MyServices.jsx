import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyServices = () => {
  const { user } = useAuth();
  const [myServices, setMyServices] = useState([]);
  const url = `http://localhost:5000/api/v1/services/${user?.email}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setMyServices(res.data);
    });
  }, [url]);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/api/v1/services/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            console.log(res.data);
            const remaining = myServices.filter((item) => item._id !== id);
            setMyServices(remaining);

            Swal.fire({
              title: "Deleted!",
              text: "Your Service is Deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="mb-10 h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SwapSkill | My-Services</title>
      </Helmet>
      <div>
        <h2 className="text-center my-10 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">My Services</h2>
      </div>
      
      {myServices?.map((services) => (
        <div key={services._id}>
          <div className="overflow-x-auto">
            <table className="table max-w-7xl mx-auto">
              {/* head */}
              <thead className="text-center">
                <tr>
                  <th>Provider Name</th>
                  <th>Service Name</th>
                  <th>Service Price</th>
                  <th>Service update</th>
                  <th>Service Delete</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="text-center">
                  <td>
                    <div className="flex items-center justify-center space-x-3">
                      <div>
                        <div className="font-bold">{services.provider_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>
                      {services.service_name}
                    </span>
                  </td>
                  <td>$ {services.service_price}</td>
                  <th>
                    <Link to={`/update/${services._id}`}><button className="btn btn-warning block mx-auto btn-xs capitalize">Update</button></Link>
                    
                  </th>
                  <th>
                    <button onClick={() => handleDelete(services._id)} className="btn btn-error block mx-auto btn-xs capitalize">Delete</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}

      
    </div>
  );
};

export default MyServices;
