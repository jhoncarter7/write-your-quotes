import { NavLink } from "react-router-dom";
import classes from "../layout/MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              AllQuotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quotes"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              NewQuotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
