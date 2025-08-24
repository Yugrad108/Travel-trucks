import css from "./CatalogTruckCard.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteTruck } from "../../redux/favorites/slice";
import { selectIsFavoriteId } from "../../redux/favorites/selector";
import Category from "../Category/Category";
import { Link } from "react-router-dom";

const Icon = ({ id, className, width = 16, height = 16 }) => {
  const href = `/images/icons.svg#${id}`;
  return (
    <svg className={className} width={width} height={height} aria-hidden="true">
      <use href={href} xlinkHref={href} />
    </svg>
  );
};

const CatalogTruckCard = ({ truck = {} }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectIsFavoriteId);

  const {
    id,
    name = "",
    price = 0,
    rating = 0,
    location = "",
    description = "",
    reviews = [],
    gallery = [],
  } = truck;

  const isFavorite = Array.isArray(favorites)
    ? favorites.some((item) => item.id === id)
    : false;

  const thumbnail = gallery?.[0]?.thumb ?? "";

  const formattedLocation = location
    ? location.split(", ").reverse().join(", ")
    : "";

  const handleToggleFavorite = () => dispatch(toggleFavoriteTruck({ id }));

  return (
    <section className={css.container}>
      <div className={css.imgContainer}>
        <img className={css.img} src={thumbnail} alt={name || "truck image"} />
      </div>

      <div className={css.info}>
        <div className={css.cost}>
          <h2 className={css.name}>{name}</h2>

          <div className={css.section}>
            <h2 className={css.price}>{`€ ${Number(price).toFixed(2)}`}</h2>

            <button
              type="button"
              onClick={handleToggleFavorite}
              className={css.buttonHeart}
              aria-pressed={isFavorite}
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              <Icon
                id="icon-heart"
                className={clsx(isFavorite ? css.active : css.disabled)}
              />
            </button>
          </div>
        </div>

        <div className={css.subContainer}>
          <div className={css.ratingContainer}>
            <Icon id="icon-star" className={css.iconStar} />
            <p className={css.rating}>
              {rating} ({reviews?.length ?? 0} Reviews)
            </p>
          </div>

          <div className={css.locationContainer}>
            <Icon id="icon-map" className={css.iconMap} />
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
