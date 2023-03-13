import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import {logo, maghe} from "../assets"

import React from "react";


const CardDeal = () => (
  // <section  id="prizes" className={layout.section}>

  //   <div className={layout.sectionInfo}>
  //     <h2 className={styles.heading2}>
  //       Win Prizes Worth <br className="sm:block hidden" /> in few easy
  //       steps.
  //     </h2>
  //     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
  //       1st Prize: 50,000<br/>
  //       2nd Prize: 30,000<br/>
  //       3rd Prize: 20,000<br/>
  //       4th Prize: 15,000<br/>
  //       5th Prize: 10,000<br/>
  //       6th Prize: 9,000<br/>
  //       7th Prize: 8,000<br/>
  //       8th Prize: 7,000<br/>
  //       9th Prize: 6,000<br/>
  //       10th Prize: 5,000<br/>
  //     </p>

 
  //               <Button styles={`mt-10`} />
  //   </div>

  //   <div className={layout.sectionImg}>
  //     <img src={card} alt="billing" className="w-[100%] h-[100%]" />
  //   </div>
  // </section>

  <section id="events" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
    <h2 className={styles.heading2}>
         Win Prizes Worth <br className="sm:block hidden" /> in few easy
         steps.
       </h2>

    </div>

    <div className="flex flex-wrap align-items-center sm:justify-start justify-center w-full  relative z-[1]">
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ">
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
        1st Prize:  50,000<br/>
        2nd Prize:  30,000<br/>
        3rd Prize:  20,000<br/>
        <br className="sm:block hidden" />
        <br className="sm:block hidden" />
        <br className="sm:block hidden" />
        <br className="sm:block hidden" />
        <br className="sm:block hidden" />
        <br className="sm:block hidden" />

    </p>
        
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
         1st Prize: 30,000<br/>
         2nd Prize: 20,000<br/>
         3rd Prize: 15,000<br/>
         4th Prize: 10,000<br/>
         5th Prize: 7,000<br/>
         6th Prize: 5,000<br/>
         7th Prize: 5,000<br/>
         8th Prize: 5,000<br/>
         9th Prize: 5,000<br/>
         10th Prize: 5,000<br/>
        </p>
    
    
    </div>
    
    </div>
  </section>
  
);

export default CardDeal;
