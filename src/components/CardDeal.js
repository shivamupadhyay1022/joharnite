import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import React from "react";


const CardDeal = () => (
  <section  id="prizes" className={layout.section}>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Win Prizes Worth <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        1st Prize: 50,000<br/>
        2nd Prize: 30,000<br/>
        3rd Prize: 20,000<br/>
        4th Prize: 15,000<br/>
        5th Prize: 10,000<br/>
        6th Prize: 9,000<br/>
        7th Prize: 8,000<br/>
        8th Prize: 7,000<br/>
        9th Prize: 6,000<br/>
        10th Prize: 5,000<br/>
      </p>

 
                <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
  
);

export default CardDeal;
