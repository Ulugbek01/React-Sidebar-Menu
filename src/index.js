import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NavItem from "./NavItem";
import ProductItem from "./ProductItem";

ReactDOM.render(
  <React.StrictMode>
    <NavItem />
    <ProductItem />
  </React.StrictMode>,
  document.getElementById("root")
);
