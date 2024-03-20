import styles from "./footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <header className={styles.header}>
       <a href="https://ead.ifms.edu.br/">  
      <Image
        width={100}
        height={100}
        src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"}>
        </Image>
        </a>
      <footer>
        <h1>Footer legal</h1>
      </footer>
    </header>
  );
}
