import React from "react";
import { Navbar, Hero, AboutMe } from "../components";
import styles from "../style";

function Project() {
  return (
    <div className=" bg-slate-300">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default Project;
