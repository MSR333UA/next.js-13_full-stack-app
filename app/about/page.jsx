import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who Are We?</h2>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            quod minima eos at, explicabo qui tenetur deleniti molestiae atque
            ea, rerum quas recusandae fugiat voluptas voluptatum porro
            blanditiis dignissimos reiciendis laudantium sed
            <br />
            <br />
            voluptate officiis inventore. Numquam, debitis iste, quibusdam sunt
            qui tempore illo delectus placeat iusto illum ipsum neque nemo.
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>What We Do?</h2>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            quod minima eos at, explicabo qui tenetur deleniti molestiae atque
            ea, rerum quas recusandae fugiat voluptas voluptatum porro
            blanditiis dignissimos reiciendis laudantium sed
            <br />
            <br /> - Dynamic Website <br /> - Fast and Handy <br /> - Mobile
            Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
