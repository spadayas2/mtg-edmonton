import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { useState } from "react";

const menuItems = [
  { name: "HOME", address: "/" },
  { name: "EVENTS", address: "/events" },
  { name: "STORES", address: "/stores" },
  { name: "TRADE/SELL", address: "/trading" },
];

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navBarContainer} ${isMenuOpen ? styles.active : ''}`}>
      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          className={styles.navItem}
          to={item.address}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default MainNavigation;
