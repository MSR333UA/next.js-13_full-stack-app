import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { getDataId } from "@/utils/API/api";

const BlogPost = async ({ params }) => {
  const data = await getDataId(params.id);
  // console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>

          <div className={styles.author}>
            <Image
              src={data.img}
              alt="author"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imgWrap}>
          <div className={styles.imgContainer}>
            <Image src={data.img} alt="" fill={true} className={styles.img} />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
