import React from "react";
import { filterIcon, searchIcon } from "../Icons";
import styles from "../CSS/FilterComponent.module.css";

const FilterComponent = (props) => {
  return (
    <div className={`${styles["div-search-filter"]} center-2`}>
      <div className={`${styles["div-search-bar"]}`}>
        <div>{searchIcon}</div>
        <input
          className={`${styles["search-bar"]}`}
          type={"search"}
          placeholder="Search by task name"
        ></input>
      </div>
      <div className={`${styles["div-filter"]}`}>
        <div className={`${styles["filter-icon"]}`}>{filterIcon}</div>
        <div className={`${styles["filter-text"]}`}>Filter</div>
      </div>
    </div>
  );
};

export default FilterComponent;
