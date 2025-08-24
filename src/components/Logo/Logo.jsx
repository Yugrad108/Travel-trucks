import { Link } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => (
  <Link className={css.logo} to="/">
    <img src="/images/logo.svg" alt="Logo" width="136" height="16" />
  </Link>
);

export default Logo;
