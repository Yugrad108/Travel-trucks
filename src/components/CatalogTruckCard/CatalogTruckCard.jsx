import { BsSuitHeart } from "react-icons/bs";
import css from "./CatalogTruckCard.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteTruck } from "../../redux/favorites/slice";
import { selectIsFavoriteId } from "../../redux/favorites/selector";
import { HiStar } from "react-icons/hi";
import { CiMap } from "react-icons/ci";
import Category from "../Category/Category";
import { Link } from "react-router-dom";

const CatalogTruckCard = ({ truck }) => {
  const favorite = useSelector(selectIsFavoriteId);
  const dispatch = useDispatch();

  const { name, price, rating, location, description, reviews, gallery, id } =
    truck;

  const handleIsFavorite = () => {
    dispatch(toggleFavoriteTruck({ id }));
  };

  const formattedLocation = location.split(", ").reverse().join(", ");
  console.log(truck);
  return (
    <section className={css.container}>
      <div className={css.imgContainer}>
        <img className={css.img} src={gallery[0].thumb} />
      </div>
      <div className={css.info}>
        <div className={css.cost}>
          <h2 className={css.name}>{name}</h2>
          <div className={css.section}>
            <h2 className={css.price}>{`€ ${Number(price).toFixed(2)}`}</h2>
            <button
              onClick={handleIsFavorite}
              type="button"
              className={css.buttonHeart}
            >
              <BsSuitHeart
                className={clsx(
                  favorite.some((item) => item.id === id)
                    ? css.active
                    : css.disabled
                )}
              />
            </button>
          </div>
        </div>
        <div className={css.subContainer}>
          <div className={css.ratingContainer}>
            <HiStar className={css.iconStar} />
            <p className={css.rating}>
              {rating} ({reviews.length} Reviews)
            </p>
          </div>
          <div className={css.locationContainer}>
            <CiMap className={css.iconMap} />
            <p className={css.location}>{formattedLocation}</p>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <div className={css.categoryContainer}>
          <Category truckInfo={truck} />
        </div>
        <Link className={css.link} to={`/catalog/${id}`}>
          Show more
        </Link>
      </div>
    </section>
  );
};

export default CatalogTruckCard;
