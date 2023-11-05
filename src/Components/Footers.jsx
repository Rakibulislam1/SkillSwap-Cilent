import { Footer } from "flowbite-react";
import { FaFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="flex md:flex-row items-center flex-col">
          <div className="flex-[1] lg:ml-20">
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">
              SkillSwap
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-10 flex-[3] mt-5">
            <div>
              <h2 className="font-bold">CONTACT</h2>
              <div className="mt-2">
                <p className="font-semibold block">16516</p>
                <p className="font-semibold block">info@skillswap.com</p>
                <p className="font-semibold block" to="/contact">
                  House 454, Road No: 31,Mirpur DOHS, Dhaka
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-bold">ABOUT</h2>
              <div className="mt-2">
                <Link className="font-semibold block" to="/">
                  Home
                </Link>
                <Link className="font-semibold block" to="/service">
                  Service
                </Link>
                <Link className="font-semibold block" to="/contact">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h2 className="font-bold mt-5 md:mt-0">COMPANY</h2>
              <div className="mt-2">
                <Link className="font-semibold block mt-3" to="#">
                  Sr.Manager
                </Link>
                <Link className="font-semibold block mt-3" to="/service">
                  Sr.Business
                </Link>
                <Link className="font-semibold block mt-3" to="/contact">
                  Sr.Delivery
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex justify-evenly">
          <h2>Copyright © 2023 Skill Swap | All Rights Reserved</h2>
          <div className="flex justify-center items-center gap-5">
            <Link>
              <FaFacebook className="text-3xl"></FaFacebook>
            </Link>
            <Link>
              <FaInstagram className="text-3xl"></FaInstagram>
            </Link>
            <Link>
              <FaSquareXTwitter className="text-3xl"></FaSquareXTwitter>
            </Link>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footers;
