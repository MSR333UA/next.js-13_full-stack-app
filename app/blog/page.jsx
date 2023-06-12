import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { getData } from "@/utils/API/api";

const Blog = async () => {
  const data = await getData();
  // console.log(data);
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          key={item.id}
          href={`/blog/${item._id}`}
          className={styles.container}
        >
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
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              facilis cumque veritatis, magnam maxime quia quisquam expedita
              voluptas est! Dicta.
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
