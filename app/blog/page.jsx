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
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
