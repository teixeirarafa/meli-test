import React from "react";

import { Link } from "react-router-dom";

import RightIcon from "../../assets/icons/right.svg";
import { Category } from "../../services/types";

import "./breadcrumb-list.styles.scss";

interface Props {
  categories: Category[];
}

const BreadcrumbList: React.FC<Props> = ({ categories }) => {
  function isLastCategory(index: number): boolean {
    return index === categories.length - 1;
  }

  return (
    <ul className="navigation-breadcrumb__list">
      {categories.map((element: Category, index: number) => (
        <li
          className={
            isLastCategory(index)
              ? "navigation-breadcrumb__list__element--active"
              : ""
          }
          key={element.id}>
          <Link to={`/items?search=${element.name}`}>{element.name}</Link>
          {!isLastCategory(index) && (
            <img
              alt="Arrow right icon"
              className="icon-arrow-right"
              src={RightIcon}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(BreadcrumbList);
