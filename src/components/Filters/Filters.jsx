import { Form, Formik } from "formik";
import css from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../../redux/trucks/selectors";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VihicleType/VehicleType";
import Location from "../Location/Location";
import { activateLoader } from '../../redux/trucks/slice';
import { addFilters } from '../../redux/filters/slice';
import { changeValue } from '../../redux/pagination/slice';


const getUniqueValues = (items, key) => [
  ...new Set(items.map(item => item[key])),
];

const Filters = () => {
  const items = useSelector(selectItems);

  const formTypes = getUniqueValues(items, 'form').sort((a, b) => {
    const order = ['panelTruck', 'fullyIntegrated', 'alcove'];
    return order.indexOf(a) - order.indexOf(b);
  });

  const initialValues = {
    location: "",
    transmisson: "",
    form: "",
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  };

  const dispatch = useDispatch();
  const handleFilterSubmit = (values, actions) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(activateLoader(true));
    setTimeout(() => {
      dispatch(addFilters(values));
      dispatch(changeValue(4));
      actions.resetForm();
      dispatch(activateLoader(false));
    }, 500);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFilterSubmit}>
      <Form>
        <Location />
        <VehicleEquipment />
        {formTypes.length > 0 && <VehicleType formTypes={formTypes} />}
        <button className={css.buttonFilters} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default Filters;
