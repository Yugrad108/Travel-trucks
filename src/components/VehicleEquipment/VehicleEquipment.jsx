// import {
//   BsCupHot,
//   BsDiagram3,
//   BsDisplay,
//   BsDroplet,
//   BsWind,
// } from "react-icons/bs";
// import css from "./VehicleEquipment.module.css";
// import { Field } from "formik";

// const equipmentOptions = [
//   { key: "AC", icon: <BsWind className={css.checkboxIcon} /> },
//   {
//     key: "transmission",
//     label: "Automatic",
//     icon: <BsDiagram3 className={css.checkboxIcon} />,
//   },
//   { key: "kitchen", icon: <BsCupHot className={css.checkboxIcon} /> },
//   { key: "TV", icon: <BsDisplay className={css.checkboxIcon} /> },
//   { key: "bathroom", icon: <BsDroplet className={css.checkboxIcon} /> },
// ];

// const VehicleEquipment = () => {
//   return (
//     <>
//       <p className={css.filterText}>Filters</p>
//       <div className={css.equipmentContainer}>
//         <h2 className={css.equipmentTitle}>Vehicle equipment</h2>
//         <ul className={css.checkboxContainers}>
//           {equipmentOptions.map((item) => (
//             <li key={item.key} className={css.customCheckboxWrapper}>
//               <Field
//                 className={css.checkboxInput}
//                 type="checkbox"
//                 name={item.key}
//                 id={item.key}
//               />
//               <label htmlFor={item.key} className={css.customCheckboxContainer}>
//                 <div className={css.customCheckbox}>
//                   {item.icon}
//                   <span className={css.checkboxText}>
//                     {item.label ? item.label : item.key}
//                   </span>
//                 </div>
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default VehicleEquipment;

import css from "./VehicleEquipment.module.css";
import { Field } from "formik";

const equipmentOptions = [
  { key: "AC", iconId: "icon-wind" },
  { key: "transmission", label: "Automatic", iconId: "icon-diagram" },
  { key: "kitchen", iconId: "icon-cup" },
  { key: "TV", iconId: "icon-tv" },
  { key: "bathroom", iconId: "icon-water-drop" },
];

const Icon = ({ id, className, width = 20, height = 20 }) => (
  <svg className={className} width={width} height={height} aria-hidden="true">
    <use href={`/images/icons.svg#${id}`} />
  </svg>
);

const VehicleEquipment = () => {
  return (
    <>
      <p className={css.filterText}>Filters</p>
      <div className={css.equipmentContainer}>
        <h2 className={css.equipmentTitle}>Vehicle equipment</h2>

        <ul className={css.checkboxContainers}>
          {equipmentOptions.map(({ key, label, iconId }) => (
            <li key={key} className={css.customCheckboxWrapper}>
              <Field
                className={css.checkboxInput}
                type="checkbox"
                name={key}
                id={key}
              />
              <label htmlFor={key} className={css.customCheckboxContainer}>
                <div className={css.customCheckbox}>
                  <Icon id={iconId} className={css.checkboxIcon} />
                  <span className={css.checkboxText}>{label ?? key}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default VehicleEquipment;
