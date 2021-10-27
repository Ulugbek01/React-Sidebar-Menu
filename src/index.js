import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./Header";
// import NavItem from "./NavItem";
// import ProductItem from "./ProductItem";
import SignIn from "./SignIn";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    {/* <SignIn /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
