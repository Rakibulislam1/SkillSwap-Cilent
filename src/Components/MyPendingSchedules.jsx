import { Helmet } from "react-helmet";

const MyPendingSchedules = () => {
  return (
    <div>
      <div className="mb-10 h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SwapSkill | My-Pending-schedules</title>
      </Helmet>
      <div>
        <h2 className="text-center my-10 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">My Pending schedules</h2>
      </div>
      
    </div>
    </div>
  );
};

export default MyPendingSchedules;