import React  from "react";
import styles from "./Avatar.module.scss";

const Avatar = ({ menu, onClick }: { menu?:  Element, onClick?: () => void }) => {
  return (
    <div className={styles.avatar_container}>
      <div
        className={styles.avatar}
        onClick={onClick}
      ></div>
      {menu}
    </div>
  );
};

export default Avatar;
