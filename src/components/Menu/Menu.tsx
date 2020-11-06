import React  from "react";
import styles from "./Menu.module.scss";

export interface IMenuItem {
  name: string;
  href?: string;
  onClick?: () => void;
}

const Menu = ({
  showMenu,
  menuLinks,
}: {
  showMenu: boolean;
  menuLinks: Element[];
}) => {
  return showMenu ? (
    <div className={styles.menu}>
      <ul>
        {menuLinks.map((element: Element, index: number) => (
          <li key={index}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default Menu;
