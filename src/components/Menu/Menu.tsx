import React from "react";
import { MenuProps } from "../../types";
import styles from "./Menu.module.scss";

export const Menu: React.FC<MenuProps> = React.memo(({ tags, onTagClick }) => {
  return (
    <div className={styles.menu}>
      {tags.map((tag) => (
        <button
          key={tag}
          className={styles.menu__button}
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
});
