import{ useState, useContext, useEffect } from "react";
import React from "react";
import { close, logo, menu } from "../assets";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const clickLogin = () => {
    if (currentUser) {
      navigate("/profile")
    } else {
      navigate("/login");
    }
  };
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="solaris" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        
          <div>
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${
              active === "Home" ? "text-white" : "text-dimWhite"
            } `}
            onClick={() => setActive("Home")}
          >
            <a href="#home" className="mr-10" >Home</a>
            <a href="#about" className="mr-10">About</a>
            <a href="#location"className={`mr-10`}>Location</a>
            <a href="#prizes"className={`mr-10`}>Prizes</a>
            <button
              onClick={clickLogin}>
             {currentUser ? "Profile"  : "Login"}
            </button>
            

          </li>
          
          </div>
          
        
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            
              <li
                key={"nav.id"}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active ===" nav.tietl" ? "text-white" : "text-dimWhite"
                } `}
                onClick={() => setActive("nav.title")}
              >
                <a href="#home"  >Home</a><br/>
                <a href="#about" >About</a><br/>
                <a href="#location">Location</a><br/>
                <a href="#prizes">Prizes</a><br/>

                <button
              onClick={clickLogin}>
             {currentUser ? "Profile"  : "Login"}
            </button>
              </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
