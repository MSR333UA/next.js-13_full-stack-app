import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const Category = ({ params }) => {
  // console.log(params);
  return (
    <div>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2 className={styles.title}>Lorem ipsum dolor</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            odit at ut eveniet nam assumenda optio pariatur dolorem velit
            ducimus.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgWrap}>
          <div className={styles.imgContainer}>
            <Image
              fill={true}
              // height={500}
              // width={500}
              src="https://images.pexels.com/photos/14245014/pexels-photo-14245014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className={styles.img}
            />
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2 className={styles.title}>Lorem ipsum dolor</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            odit at ut eveniet nam assumenda optio pariatur dolorem velit
            ducimus.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgWrap}>
          <div className={styles.imgContainer}>
            <Image
              fill={true}
              // height={500}
              // width={500}
              src="https://images.pexels.com/photos/16375374/pexels-photo-16375374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className={styles.img}
            />
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2 className={styles.title}>Lorem ipsum dolor</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            odit at ut eveniet nam assumenda optio pariatur dolorem velit
            ducimus.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgWrap}>
          <div className={styles.imgContainer}>
            <Image
              fill={true}
              // height={500}
              // width={500}
              src="https://images.pexels.com/photos/16099580/pexels-photo-16099580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
