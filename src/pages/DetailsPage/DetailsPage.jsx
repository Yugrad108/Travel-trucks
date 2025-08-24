//

import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTruckItems } from "../../redux/truck/selectors";
import { fetchTruck } from "../../redux/truck/operation";
import css from "./DetailsPage.module.css";

const Icon = ({ id, className, width = 18, height = 18 }) => {
  const href = `/images/icons.svg#${id}`;
  return (
    <svg className={className} width={width} height={height} aria-hidden="true">
      <use href={href} xlinkHref={href} />
    </svg>
  );
};

const DetailsPage = () => {
  const { truckId } = useParams();
  const truckInfo = useSelector(selectTruckItems);
  const path = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (truckId) {
      dispatch(fetchTruck(truckId));
      window.scrollTo(0, 0);
    }
  }, [dispatch, truckId]);

  if (!truckInfo || Object.keys(truckInfo).length === 0) {
    return null;
  }

  const {
    name,
    price,
    rating,
    location = "",
    description,
    reviews = [],
    gallery = [],
  } = truckInfo;

  const formattedLocation = location
    ? location.split(", ").reverse().join(", ")
    : "";

  return (
    <section className={css.truckInfoSection}>
      <div className={css.truckInfoContainer}>
        <h2 className={css.truckName}>{name}</h2>

        <div className={css.subContainer}>
          <div className={css.ratingContainer}>
            <Icon id="icon-star" className={css.iconStar} />
            <p className={css.rating}>
              {rating} ({reviews.length} Reviews)
            </p>
          </div>

          <div className={css.locationContainer}>
            <Icon id="icon-map" className={css.iconMap} />
            <p className={css.location}>{formattedLocation}</p>
          </div>
        </div>

        <h2 className={css.truckPrice}>{`€ ${Number(price).toFixed(2)}`}</h2>
      </div>

      <ul className={css.galleryList}>
        {gallery.map((image) => (
          <li className={css.galleryListItem} key={image.original}>
            <img
              className={css.truckImg}
              src={image.original}
              alt="photo truck"
            />
          </li>
        ))}
      </ul>

      <p className={css.textDescriprion}>{description}</p>

      <ul className={css.listLinks}>
        <li>
          <NavLink
            className={() =>
              path.pathname.endsWith("features") ||
              (!path.pathname.includes("reviews") &&
                !path.pathname.endsWith("/"))
                ? css.active
                : css.link
            }
            to="features"
          >
            Features
          </NavLink>
        </li>

        <li>
          <NavLink
            className={() =>
              path.pathname.includes("reviews") ? css.active : css.link
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </section>
  );
};

export default DetailsPage;
