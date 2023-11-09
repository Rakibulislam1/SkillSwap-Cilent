import { Helmet } from "react-helmet";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import MyPendingSchedules from "./MyPendingSchedules";

const MySchedules = () => {
  const { user } = useAuth();
  const [mySchedules, setMySchedules] = useState([]);
  const url = `https://assign11server.vercel.app/api/bookings/${user?.email}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setMySchedules(res.data);
    });
  }, [url]);

  return (
    <div className="mb-10 h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SwapSkill | My-schedules</title>
      </Helmet>
      <div>
        <h2 className="text-center my-10 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">
          My Bookings
        </h2>
      </div>

      {mySchedules.length === 0 ? (
        <div className="text-center my-20 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">
          No Service added
        </div>
      ) : (
        mySchedules?.map((schedules) => (
          <div key={schedules._id}>
            <div className="overflow-x-auto">
              <table className="table max-w-7xl mx-auto">
                {/* head */}
                <thead className="text-center">
                  <tr>
                    <th>Provider Name</th>
                    <th>Service Name</th>
                    <th>Service Date</th>
                    <th>Service Price</th>
                    <th>Service Pending</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="text-center">
                    <td>
                      <div className="flex items-center justify-center space-x-3">
                        <div>
                          <div className="font-bold">
                            {schedules.provider_name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>{schedules.service_name}</span>
                    </td>
                    <td>{schedules.date}</td>
                    <td>$ {schedules.service_price}</td>
                    <th>
                      <button className="btn btn-warning block mx-auto btn-xs capitalize">
                        Pending
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}

      {/* My-Pending-schedules */}
      <MyPendingSchedules></MyPendingSchedules>
    </div>
  );
};

export default MySchedules;
