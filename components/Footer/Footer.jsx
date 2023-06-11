import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 MSR development. All rights reversed.</div>
      <div className={styles.social}>
        <Link href={"https://linkedin.com/in/matviivserhii"} target="_bland">
          <Image
            className={styles.icon}
            src="/0.png"
            alt="Lama Dev LinkedIn"
            width={15}
            height={15}
          />
        </Link>
        <Link href={"https://www.facebook.com/msr333"} target="_bland">
          <Image
            className={styles.icon}
            src="/1.png"
            alt="Lama Dev Facebook"
            width={15}
            height={15}
          />
        </Link>
        <Link href={"https://instagram.com/just.lucky.boy"} target="_bland">
          <Image
            className={styles.icon}
            src="/2.png"
            alt="Lama Dev Instagram"
            width={15}
            height={15}
          />
        </Link>
        <Link href={"https://t.me/msr333"} target="_bland">
          <Image
            className={styles.icon}
            src="/5.png"
            alt="Lama Dev Telegram"
            width={15}
            height={15}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
