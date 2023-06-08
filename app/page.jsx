import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Image
        src="https://www.instagram.com/p/CT0Ln7AI5a2/?utm_source=ig_web_copy_link"
        width={500}
        height={500}
      />
    </div>
  );
}
