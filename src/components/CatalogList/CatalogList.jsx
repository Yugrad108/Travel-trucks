import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";
import {
  selectError,
  selectLoading,
  selectVisibleTrucks,
} from "../../redux/trucks/selectors";
import { activateLoader } from "../../redux/trucks/slice";
import { selectPaginationPage } from "../../redux/pagination/selectors";
import { addValue } from "../../redux/pagination/slice";

import CatalogTruckCard from "../../components/CatalogTruckCard/CatalogTruckCard";

import css from "./CatalogList.module.css";

const CatalogList = () => {
  const trucks = useSelector(selectVisibleTrucks);
  const visibleCount = useSelector(selectPaginationPage);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const loadMore = () => {
    dispatch(activateLoader(true));
    setTimeout(() => {
      dispatch(addValue(4));
      dispatch(activateLoader(false));
    }, 500);
  };

  if (error) {
    toast.error("An error occurred while fetching trucks.", {
      position: "top-right",
    });
  }

  return (
    <div className={css.container}>
      <ul className={css.catalogList}>
        {trucks.slice(0, visibleCount).map((truck) => (
          <li className={css.catalogListItem} key={truck.id}>
            <CatalogTruckCard truck={truck} />
          </li>
        ))}
      </ul>
      {error && <Toaster />}

      {trucks.length === 0 && !loading && !error ? (
        <div className={css.badFilter}>
          <h2>Oops! We couldn`t find it.</h2>
        </div>
      ) : (
        visibleCount < trucks.length && (
          <button
            onClick={loadMore}
            className={clsx(
              visibleCount >= trucks.length ? css.disLoadMore : css.loadMore
            )}
            disabled={loading}
          >
            Load more
          </button>
        )
      )}
    </div>
  );
};

export default CatalogList;
