import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
const MenuNavbar = () => {
  const category = useSelector((state) => state.category);

  const renderCategories = (categories) =>
    categories.map((category) => (
      <li key={category._id} title={category.name}>
        <Link to={`/${category.slug}`}>{category.name}</Link>

        {category.children.length > 0 && (
          <ul className="list-unstyled">
            {renderCategories(category.children)}
          </ul>
        )}
      </li>
    ));

  return (
    <nav className="menu-navbar m-auto w-75">
      <ul className="list-unstyled">
        {category.categories && renderCategories(category.categories)}
      </ul>
    </nav>
  );
};

export default MenuNavbar;
