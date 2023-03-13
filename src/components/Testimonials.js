import { feedback } from "../constants";
import styles from "../style";
import { AuthContext } from "../contexts/AuthProvider";

import FeedbackCard from "./FeedbackCard";
import {logo, maghe} from "../assets"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const Testimonials = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const clickLogin = () => {
    if (currentUser) {
      navigate("/profile")
    } else {
      navigate("/signup");
    }};

  // const clickLoginJohar = () => {
  // if (currentUser) {
  //   navigate("/profile")
  // } else {
  //   navigate("/signupjohar");
  // }};
  // const clickLoginMaghe = () => {
  //   if (currentUser) {
  //     navigate("/profile")
  //   } else {
  //     navigate("/signupmaghe");
  //   }};

  return(<section id="events" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Take Part in  <br className="sm:block hidden" />Two Major Events
      </h2>

    </div>

    <div className="flex flex-wrap align-items-center sm:justify-start justify-center w-full  relative z-[1]">
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 ">
      <div className="flex">
      <img src={logo} alt="johar-nite" className="w-[160.6px] object-contain" />
      {/* <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          JoharNite
        </h4> */}
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          2023
        </p>
      </div>
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        A platform for teams to showcase their tribal dance forms fused with modern dance styles.<br/>
        Entry Fee: 500
        </p>
        <button onClick={clickLogin}  className={`w-full py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
          {currentUser ? "Profile"  : "Register"}
        </button>
    </div>


    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <div className="flex">
      <img src={maghe} alt="maghe-susun" className="w-[180.6px]  object-contain" />
      {/* <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          MagheSusun
        </h4> */}
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          2023
        </p>
      </div>
    
    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        
      </div>
    </div>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
    A jubilant celebration of tribal culture and customs celebrating grand festival of Maghe Porob<br/>
    Entry Fee: 1000   
    </p>
    <button onClick={clickLogin}  className={`w-full py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {currentUser ? "Profile"  : "Register"}
    </button>
    </div>
    
    </div>
  </section>);
}

export default Testimonials;
