import React from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";

const Button = ({ styles }) => {
  // const navigate = useNavigate();
const { currentUser } = useContext(AuthContext);

// const clickLogin = () => {
//   if (currentUser) {
//     navigate("/profile")
//   } else {
//     navigate("#events");
//   }}
return(
  <a href="#events" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {currentUser ? "Profile"  : "Register"}
  </a>
);
}

export default Button;
