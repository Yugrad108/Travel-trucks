import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.box}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
          <Link to="/catalog" className={css.button}>
            View Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
