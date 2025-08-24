import css from "./VehicleDetails.module.css";

const splitCamelCase = (str = "") => str.replace(/([a-z])([A-Z])/g, "$1 $2");

const formatWithUnit = (value = "", unitLength = 1) => {
  if (typeof value !== "string" || value.length <= unitLength) return value;
  const main = value.slice(0, value.length - unitLength);
  const unit = value.slice(-unitLength);
  return `${main} ${unit}`;
};

const VehicleDetails = ({ truckInfo = {} }) => {
  const { consumption, tank, length, width, form, height } = truckInfo;

  const items = [
    { label: "Form", value: splitCamelCase(form) },
    { label: "Length", value: formatWithUnit(length, 1) },
    { label: "Width", value: formatWithUnit(width, 1) },
    { label: "Height", value: formatWithUnit(height, 1) },
    { label: "Tank", value: formatWithUnit(tank, 1) },
    { label: "Consumption", value: formatWithUnit(consumption, 2) },
  ];

  return (
    <ul className={css.charactList}>
      {items.map(({ label, value }) => (
        <li key={label} className={css.charactItem}>
          <p>{label}</p>
          <p className={css.typeText}>{value}</p>
        </li>
      ))}
    </ul>
  );
};

export default VehicleDetails;
