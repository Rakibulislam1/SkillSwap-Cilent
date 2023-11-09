import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../Hooks/useAuth";


const MyPendingSchedules = () => {

  const {user } = useAuth()

  const [myPending, setMyPending] = useState([]);
  const url = `https://assign11server.vercel.app/api/v1/pending/${user?.email}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setMyPending(res.data);
    });
  }, [url]);
  console.log(myPending);

  
  return (
    <div className="">
      <div className="mb-20">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SwapSkill | My-Pending-schedules</title>
        </Helmet>
        <div>
          <h2 className="text-center my-10 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">
            My Pending schedules
          </h2>
        </div>

        <div className="mb-10 h-screen">

          {
            myPending?.map((services) => (
              <div key={services._id}>
                <div className="overflow-x-auto">
                  <table className="table max-w-7xl mx-auto">
                    {/* head */}
                    <thead className="text-center">
                      <tr>
                        <th>Provider Name</th>
                        <th>Service Name</th>
                        <th>Service Price</th>
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
                                {services.provider_name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>{services.service_name}</span>
                        </td>
                        <td>$ {services.service_price}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default MyPendingSchedules;
