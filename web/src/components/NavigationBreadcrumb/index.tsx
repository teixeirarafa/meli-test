import React from "react";
import { Category } from "../../services/types";
import BreadcrumbList from "../BreadcrumbList";

import "./navigation-breadcrumb.styles.scss";

interface Props {
  categories: Category[];
}

const NavigationBreadcrumb: React.FC<Props> = ({ categories }) => {
  return (
    <div className="container">
      <div className="navigation-breadcrumb">
        <BreadcrumbList categories={categories} />
      </div>
    </div>
  );
};

export default NavigationBreadcrumb;
