import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";
import clsx from "clsx";

const activeClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.nav}>
          <Logo />
          <ul className={css.list}>
            <li>
              <NavLink className={activeClass} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={activeClass} to="/catalog" end>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
