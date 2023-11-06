// import { Link, NavLink } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Nav = () => {
  const { logout, user } = useAuth();
  console.log(user);

  return (
    // <div className="shadow-xl sticky top-0 z-30 bg-white">
    //   <Navbar fluid className="max-w-7xl mx-auto sm:px-0 md:px-2 bg-none">
    //     <Navbar.Brand>
    //       <span className="self-center whitespace-nowrap text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">
    //         SkillSwap
    //       </span>
    //     </Navbar.Brand>

    //     <div className="flex gap-2 md:gap-4 md:order-2">
    //       {user ? (
    //         <Dropdown label="Dashboard" dismissOnClick={false}>
    //           <Dropdown.Item>
    //             <Link to="/myService">
    //               <button>My Service</button>
    //             </Link>
    //           </Dropdown.Item>
    //           <Dropdown.Item>Add Service</Dropdown.Item>
    //           <Dropdown.Item>My Schedules</Dropdown.Item>
    //         </Dropdown>
    //       ) : (
    //         ""
    //       )}

    //       {user ? (
    //         <div className="flex flex-wrap gap-2">
    //           <Avatar className="hidden md:block"
    //             img={user?.photoURL}
    //             rounded
    //           />
    //         </div>
    //       ) : (
    //         ""
    //       )}

    //       {user ? (
    //         <button
    //           onClick={logout}
    //           className="px-5 py-1 rounded-md bg-gradient-to-r from-[#6345ED] to-[#DC39FC] border-none font-medium text-lg text-white hover:rounded-full"
    //         >
    //           Log out
    //         </button>
    //       ) : (
    //         <Link to="/login">
    //           <button
    //             onClick=""
    //             className="px-5 py-1 rounded-md bg-gradient-to-r from-[#6345ED] to-[#DC39FC] border-none font-medium text-lg text-white hover:rounded-full"
    //           >
    //             Login
    //           </button>
    //         </Link>
    //       )}
    //       <Navbar.Toggle />
    //     </div>
    //     <Navbar.Collapse className="lg:ml-44">
    //       <NavLink
    //         to="/"
    //         className={({ isActive }) =>
    //           isActive ? "underline" : ""
    //         }
    //       >
    //         <Navbar.Link>Home</Navbar.Link>
    //       </NavLink>
    //       <NavLink
    //         to="/services"
    //         className={({ isActive }) =>
    //           isActive ? "underline" : ""
    //         }
    //       >
    //         <Navbar.Link>Services</Navbar.Link>
    //       </NavLink>
    //       <NavLink
    //         to="/contact"
    //         className={({ isActive }) =>
    //           isActive ? "underline" : ""
    //         }
    //       >
    //         <Navbar.Link>Contact</Navbar.Link>
    //       </NavLink>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </div>

    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">
          SkillSwap
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={user.photoURL}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">
                {user ? <span>Profile: {user.displayName}</span> : ""}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          ""
        )}
        <Navbar.Toggle />
        {user ? (
          ""
        ) : (
          <div className="flex justify-end mx-2">
            <Link
              to="/login"
              className="px-4 py-2 font-semibold text-white rounded-xl bg-gradient-to-r from-[#6345ED] to-[#DC39FC] hover:rounded-full"
            >
              Log in
            </Link>
          </div>
        )}
      </div>

      <Navbar.Collapse>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          <Navbar.Link>Home</Navbar.Link>
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          <Navbar.Link>Services</Navbar.Link>
        </NavLink>
        <Navbar.Link>
          <Dropdown label="Dropdown" inline>
            <Dropdown.Item>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Ami
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
          </Dropdown>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
