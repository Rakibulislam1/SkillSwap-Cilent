import { Link } from "react-router-dom";
import errorGif from "../../src/assets/Images/404.gif";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[70vh]">
        <img className="w-[35%]" src={errorGif} alt="" />
      </div>
      <div>
        <button className="px-5 py-1 block mx-auto rounded-md bg-gradient-to-r from-[#6345ED] to-[#DC39FC] border-none font-medium text-lg text-white hover:rounded-full">
          <Link className="text-center" to='/'>Go Back</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
