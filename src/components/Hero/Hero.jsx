import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abhishek</h1>
        <p className={styles.description}>
        Hello Everyone, My Name is Abhishek Tiwari and I am from Rewa
                Madhya Pradesh. I enjoy to represent the real world things in the form of code. If you want to
                have digital existence, can contact me.😜
        </p>
        <a href="abhishektiwari2807@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/myabout.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
