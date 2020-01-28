import React from "react";
import s from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <navLink>Profile</navLink>
      </div>
      <div className={ `${s.item} ${s.active}` }>
        <navLink>Messages</navLink>
      </div>
      <div className={s.item}>
        <navLink>News</navLink>
      </div>
      <div className={s.item}>
        <navLink>Musik</navLink>
      </div>
      <div className={s.item}>
        <navLink>Settings</navLink>
      </div>
    </nav>
  );
};

export default Navbar;
