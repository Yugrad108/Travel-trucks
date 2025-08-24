import css from "./VehicleType.module.css";
import { Field } from "formik";

const Icon = ({ id, className, width = 20, height = 20 }) => {
  const href = `/images/icons.svg#${id}`;
  return (
    <svg className={className} width={width} height={height} aria-hidden="true">
      <use href={href} xlinkHref={href} />
    </svg>
  );
};

const VehicleType = ({ formTypes = [] }) => {
  const iconIdMap = {
    panelTruck: "icon-grid-1x2",
    fullyIntegrated: "icon-grid-2x2",
    alcove: "icon-grid-3x3",
  };

  const formTypeLabels = {
    panelTruck: "Van",
    fullyIntegrated: "Fully Integrated",
    alcove: "Alcove",
  };

  return (
    <>
      <h2 className={css.radioTitle}>Vehicle type</h2>
      <ul className={css.radioContainers}>
        {formTypes.map((type) => (
          <li key={type} className={css.customRadioWrapper}>
            <Field
              className={css.radioInput}
              type="radio"
              name="form"
              id={`radio-${type}`}
              value={type}
            />
            <label
              htmlFor={`radio-${type}`}
              className={css.customRadioContainer}
            >
              <div className={css.customRadio}>
                {iconIdMap[type] ? (
                  <Icon id={iconIdMap[type]} className={css.radioIcon} />
                ) : null}
              </div>
              <span className={css.radioText}>
                {formTypeLabels[type] ?? type}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default VehicleType;
