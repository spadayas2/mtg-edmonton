import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const menuItems = [
  { name: "HOME", address: "/" },
  { name: "EVENTS", address: "/events" },
  { name: "STORES", address: "/stores" },
  { name: "TRADE/SELL", address: "/trading" },
];

function MainNavigation() {
  return (
    <nav className={classes.navBarContainer}>
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          className={classes.navItem}
          to={item.address}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default MainNavigation;
