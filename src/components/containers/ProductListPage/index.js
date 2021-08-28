import React from "react";
import { getQuery } from "../../../utils/getQuery";

import Layout from "../../Layout";
import ProductPage from "./ProductPage";
import ProductStore from "./ProductStore";
import "./style.css";


const ProductListPage = (props) => {
  const { type } = getQuery(props.location.search);
  const renderProducts = () => {
    let content = null;
    switch (type) {
      case "store":
        content = <ProductStore {...props}/>;
        break;
      case "page":
        content = <ProductPage {...props}/>;
        break;
      default:
        content = <ProductPage {...props}/>;
        break;
    }

    return content;
  };

  return <Layout>{renderProducts()}</Layout>;
};

export default ProductListPage;
