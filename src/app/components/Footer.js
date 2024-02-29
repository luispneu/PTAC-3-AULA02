import styles from "./footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <header className={styles.header}>
       <a href="https://ead.ifms.edu.br/">  
      <Image
        width={100}
        height={100}
        src={"https://www.ifms.edu.br/marcaifms.https://www.google.com/"}>
        </Image>
        </a>
      <footer>
        <h1>Footer legal</h1>
      </footer>
    </header>
  );
}
