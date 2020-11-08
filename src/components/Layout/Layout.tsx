import React  from "react";
import Footer from "src/components/Footer/Footer"
import Header from "src/components/Header/Header";
import styles from "./Layout.module.scss";

const Layout = ({
  children,
  layoutClassName,
  contentClassName,
}: {
  children: any;
  layoutClassName?: string;
  contentClassName?: string;
}) => {

  return (
    <div
      className={`layout ${styles.layout} ${
        layoutClassName ? layoutClassName : ""
      }`}
    >
      <header className={styles.header}>
        <Header></Header>
      </header>
      <main
        className={`${styles.content} ${
          contentClassName ? contentClassName : ""
        }`}
      >
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
