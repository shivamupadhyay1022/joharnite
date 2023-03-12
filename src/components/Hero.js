import styles from "../style";
import React from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useContext } from "react";
import {  robot } from "../assets";
import GetStarted from "./GetStarted";
import {  useNavigate } from "react-router-dom";



const Hero = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const clickLogin = () => {
    if (currentUser) {
      navigate("/profile")
    } else {
      navigate("/login");
    }}

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The 2023 <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Johar</span>{" "}<br/>
            <span className="text-gradient">NiteFest</span>{" "}

          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          <a href="#events" >
                <GetStarted />
            </a>
            
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Is Here!.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A harvest festival, Maghe is the biggest gathering of Ho, Oraon, Kisan and Kol tribes in Jharkhand. Observed
         in honor of the village deity (Mother Goddess) who bestows upon them with good fortune and protects them from 
         calami􀆟es and held during month of February.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      <a href="#events" >
                <GetStarted />
            </a>
      </div>
    </section>
  );
};

export default Hero;
