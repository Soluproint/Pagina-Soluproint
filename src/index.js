import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".navbar-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("navbar-menu_visible");
}); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
