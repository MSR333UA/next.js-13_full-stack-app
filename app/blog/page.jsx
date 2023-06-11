import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/1" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/4407184/pexels-photo-4407184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Lorem ipsum dolor sit amet.</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            facilis cumque veritatis, magnam maxime quia quisquam expedita
            voluptas est! Dicta.
          </p>
        </div>
      </Link>
      <Link href="/blog/2" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/16099252/pexels-photo-16099252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Lorem ipsum dolor sit amet.</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            facilis cumque veritatis, magnam maxime quia quisquam expedita
            voluptas est! Dicta.
          </p>
        </div>
      </Link>
      <Link href="/blog/3" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/13550114/pexels-photo-13550114.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Lorem ipsum dolor sit amet.</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            facilis cumque veritatis, magnam maxime quia quisquam expedita
            voluptas est! Dicta.
          </p>
        </div>
      </Link>
      <Link href="/blog/4" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2403850/pexels-photo-2403850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Lorem ipsum dolor sit amet.</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            facilis cumque veritatis, magnam maxime quia quisquam expedita
            voluptas est! Dicta.
          </p>
        </div>
      </Link>
      <Link href="/blog/5" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Lorem ipsum dolor sit amet.</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            facilis cumque veritatis, magnam maxime quia quisquam expedita
            voluptas est! Dicta.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
