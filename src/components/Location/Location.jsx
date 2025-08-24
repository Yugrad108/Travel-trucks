import { Field } from "formik";
import { useId } from "react";
import css from "./Location.module.css";

const Icon = ({ id, className, width = 16, height = 16 }) => {
  const href = `/images/icons.svg#${id}`;
  return (
    <svg className={className} width={width} height={height} aria-hidden="true">
      <use href={href} xlinkHref={href} />
    </svg>
  );
};

const Location = () => {
  const locationId = useId();

  return (
    <div className={css.locationContainer}>
      <label className={css.labelLocation} htmlFor={locationId}>
        Location
      </label>

      <Icon id="icon-map" className={css.icon} />

      <Field
        className={css.inputLocation}
        type="text"
        placeholder="City"
        name="location"
        id={locationId}
        aria-label="Location"
      />
    </div>
  );
};

export default Location;
