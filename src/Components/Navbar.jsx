// import { Link, NavLink } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Nav = () => {
  const { logout, user } = useAuth();

  return (
    <Navbar fluid rounded className="shadow-md">
      <Navbar.Brand>
        <span className="self-center text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6345ED] to-[#DC39FC]">
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
                to="/bookService"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                My Booking
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Ami
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Ami
              </NavLink>
            </Dropdown.Item>
            
          </Dropdown>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
