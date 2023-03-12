import { features } from "../constants";
import styles, { layout } from "../style";
import { AuthContext } from "../contexts/AuthProvider";
import { useContext } from "react";
import Button from "./Button";
import React from "react";
import { useNavigate } from "react-router-dom";



const FeatureCard = ({ icon, title, content, index }) => (
  

  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  {
  const navigate = useNavigate();
const { currentUser } = useContext(AuthContext);

const clickLogin = () => {
  if (currentUser) {
    navigate("/profile")
  } else {
    navigate("/login");
  }}

return(
  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      About The Event 
      {/* <br className="sm:block hidden" /> we’ll handle
        the money. */}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      A harvest festival, Maghe is the biggest gathering of Ho, Oraon, 
      Kisan and Kol tribes in Jharkhand. Observed in honor of the village deity 
      (Mother Goddess) who bestows upon them with good fortune and protects them 
      from calami􀆟es and held during month of February.
      </p>

                <Button styles={`mt-10`} />
      
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>);
      }

export default Business;
