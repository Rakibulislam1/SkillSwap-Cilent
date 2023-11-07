import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import googleImg from "../../src/assets/Images/google.png";
import { Helmet } from "react-helmet";

const Login = () => {
  const { login, googleSignIn } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Logging in...");

    try {
      await login(email, password);
      toast.success("Logged in successfully", { id: toastId });

      navigate("/");
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Logging in...");

    try {
      await googleSignIn();
      toast.success("Logged in successfully", { id: toastId });

      navigate("/");
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skill-Swap | Login</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Skill-Swap
        </Link>
        <div className="w-full shadow-2xl bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={handleLogin}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required=""
                  onBlur={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onBlur={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
            </form>

            <div className="grid grid-cols-3 items-center justify-center text-center">
              <hr />
              <p className="text-lg text-center font-medium text-gray-500">
                or
              </p>
              <hr />
            </div>
            <Link>
              <span
                onClick={handleGoogleSignIn}
                className="flex justify-center flex-wrap items-center mt-4 text-blue-700 hover:text-purple-900 font-semibold"
              >
                <img className="w-10" src={googleImg} />
                Login With Google
              </span>
            </Link>

            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet ?{" "}
              <Link
                to="/register"
                className="font-medium text-base-200 hover:underline dark:text-base-300"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
