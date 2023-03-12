import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import styles from "../style";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log(error)
      );
      navigate("/");
    }
    onRegister();
  };

  return (
    <div className=" bg-primary flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
      {/* <div>
                <a href="/">
                    <h3 className="text-4xl font-bold text-purple-600">
                    <span className="text-gradient">Login</span>
                    </h3>
                </a>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Name
                        </label>
                        </div>
                        </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form> */}

      <div>
                <a href="/">
                    <h3 className="text-4xl font-bold text-purple-600">
                    <span className="text-gradient">Login</span>
                    </h3>
                </a>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                <form className="loginForm" onSubmit={handleSubmit}>

                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Email
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full py-2 mt-1 px-5 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Password
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full py-2 px-5 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>

                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="flex items-center mt-4">

                        <button   className={`w-full py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-grey-600">
                    Dont Have Account?{" "}
                    <span>
                    <NavLink
              className="navbar-link"
              to="/signup">
                <button styles={`mt-10`} className="text-purple-600" >SignUp</button>
            </NavLink>
                    </span>
                </div>
            </div>
            <NavLink
                    className="navbar-link"
                    to="/">
                    <button
                    class="fixed z-90 bottom-10 right-4 bg-blue-gradient w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-green-700 hover:drop-shadow-2xl ">&#127968;</button>
                    </NavLink>
        </div>
  );
};

export default Login;