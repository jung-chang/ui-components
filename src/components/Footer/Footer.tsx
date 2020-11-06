import React  from "react";
import styles from "./Footer.module.scss";

const Footer = ({children}: {children?: any}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        {children}
      </div>
    </footer>
  );
};

export default Footer;
