import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};
const Category = ({ params }) => {
  // console.log(params);
  const data = getData(params.category);
  // console.log(data);
  return (
    <div>
      <h1 className={styles.catTitle}>{params.category}</h1>
      
      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgWrap}>
            <div className={styles.imgContainer}>
              <Image
                fill={true}
                // height={500}
                // width={500}
                src={item.image}
                alt=""
                className={styles.img}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
