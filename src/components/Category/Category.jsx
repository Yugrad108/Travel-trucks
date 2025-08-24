import React from "react";
import s from "./Category.module.css";
import sprite from "/images/icons.svg";

const Category = ({ truckInfo }) => {
  if (!truckInfo) return null;

  const {
    transmission,
    engine,
    AC,
    kitchen,
    refrigerator,
    radio,
    bathroom,
    microwave,
    TV,
    gas,
    water,
    form,
  } = truckInfo;

  const allPossibleLabels = [
    { key: "transmission", text: transmission, iconId: "#icon-diagram" },
    { key: "engine", text: engine, iconId: "#icon-petrol" },

    {
      key: "form-alcove",
      text: "Alcove",
      iconId: "#icon-grid-3x3",
      condition: form === "alcove",
    },
    {
      key: "form-fullyIntegrated",
      text: "Fully Integrated",
      iconId: "#icon-grid-2x2",
      condition: form === "fullyIntegrated",
    },
    {
      key: "form-van",
      text: "Van",
      iconId: "#icon-grid-1x2",
      condition: form === "van",
    },
    {
      key: "form-panelTruck",
      text: "Panel Truck",
      iconId: "#icon-grid-2x2",
      condition: form === "panelTruck",
    },

    { key: "AC", text: "AC", iconId: "#icon-wind", condition: AC },
    {
      key: "kitchen",
      text: "Kitchen",
      iconId: "#icon-cup",
      condition: kitchen,
    },
    {
      key: "refrigerator",
      text: "Refrigerator",
      iconId: "#icon-fridge",
      condition: refrigerator,
    },
    { key: "radio", text: "Radio", iconId: "#icon-radio", condition: radio },
    {
      key: "bathroom",
      text: "Bathroom",
      iconId: "#icon-shower",
      condition: bathroom,
    },
    {
      key: "microwave",
      text: "Microwave",
      iconId: "#icon-microwave",
      condition: microwave,
    },
    { key: "TV", text: "TV", iconId: "#icon-tv", condition: TV },
    { key: "gas", text: "Gas", iconId: "#icon-gas-stove", condition: gas },
    {
      key: "water",
      text: "Water",
      iconId: "#icon-water-drop",
      condition: water,
    },
  ];

  const availableLabels = allPossibleLabels.filter((label) => {
    if (typeof label.condition !== "undefined") return Boolean(label.condition);
    return Boolean(label.text);
  });

  return (
    <ul className={s.categoryList}>
      {availableLabels.map(({ key, text, iconId }) => (
        <li className={s.category} key={key}>
          <svg className={s.iconCategory} aria-hidden="true" focusable="false">
            <use href={`${sprite}${iconId}`} />
          </svg>
          <p className={s.categoryText}>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Category;
