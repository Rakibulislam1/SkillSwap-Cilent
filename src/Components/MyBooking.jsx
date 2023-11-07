import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";

const MyBooking = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/api/bookings/${user?.email}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setBookings(res.data);
    });
  }, [url]);


  return (
    <div className="mb-10 h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SwapSkill | My-Services</title>
      </Helmet>
      {bookings?.map((booking) => (
        <div key={booking._id}>
          <div className="overflow-x-auto">
            <table className="table max-w-7xl mx-auto">
              {/* head */}
              <thead className="text-center">
                <tr>
                  <th>Provider Name</th>
                  <th>Service Name</th>
                  <th>Service Date</th>
                  <th>Service Price</th>
                  <th>Service Update</th>
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
                        <div className="font-bold">{booking.provider_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>
                      {booking.service_name}
                    </span>
                  </td>
                  <td>{booking.date}</td>
                  <td>$ {booking.service_price}</td>
                  <th>
                    <button className="btn btn-warning block mx-auto btn-xs capitalize">Update</button>
                  </th>
                  <th>
                    <button className="btn btn-error block mx-auto btn-xs capitalize">Delete</button>
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

export default MyBooking;
