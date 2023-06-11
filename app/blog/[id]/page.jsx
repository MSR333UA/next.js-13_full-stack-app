import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            cumque accusamus doloribus explicabo voluptate molestiae provident
            ipsum esse veniam consectetur sequi, ratione architecto quidem iste
            quibusdam adipisci pariatur ipsam ab?
          </p>

          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/5248020/pexels-photo-5248020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="author"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Anna Smith</span>
          </div>
        </div>
        <div className={styles.imgWrap}>
          <div className={styles.imgContainer}>
            <Image
              src="https://images.pexels.com/photos/4407184/pexels-photo-4407184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill={true}
              className={styles.img}
            />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          perferendis inventore voluptatum possimus assumenda aliquid dicta
          voluptate quidem deleniti iusto modi qui earum quia expedita, id quas
          minima eligendi quos. Mollitia, optio reprehenderit quo tenetur quis
          reiciendis adipisci, molestiae voluptatibus veniam esse expedita.
          Officiis laudantium alias, cumque id, cum eaque dolore accusantium
          aliquam ipsam nesciunt aut omnis inventore similique sunt! Nemo alias
          praesentium ipsam dignissimos itaque, rerum sit explicabo molestias
          earum omnis nobis, repudiandae fugiat quos perspiciatis? <br /> <br />
          Corrupti culpa aliquam libero, commodi vero sed. Obcaecati dolor esse
          sunt non quas! Nesciunt veniam dolor magni fugit ad est sint nobis
          <br /> <br />
          eaque saepe earum provident laborum dolores nihil fuga hic, sunt esse
          ratione voluptatum autem numquam, qui minus. Modi neque nesciunt
          ratione. Numquam minima quod officia rem magni, et sunt deleniti
          perspiciatis veritatis recusandae provident dolore alias iure ipsam
          tempora perferendis in facere quidem voluptatum, quae dignissimos
          eaque? Maxime alias provident sed!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
