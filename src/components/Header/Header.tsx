import React  from "react";
import styles from "./Header.module.scss";

const Header = ({children}: {children?: any}) => {
  return (
    <div className={styles.header}>
      {children}
    </div>
  );
};

export default Header;
