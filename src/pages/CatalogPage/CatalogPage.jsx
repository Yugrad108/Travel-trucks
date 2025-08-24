import css from "./CatalogPage.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTrucks } from "../../redux/trucks/operations";
import { resetFilters } from "../../redux/filters/slice";
import Filters from "../../components/Filters/Filters";
import CatalogList from "../../components/CatalogList/CatalogList";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrucks());
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <section className={css.catalog}>
      <div className={css.container}>
        <Filters />
        <CatalogList />
      </div>
    </section>
  );
};

export default CatalogPage;
