//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondscounter.jsx";

let contador = 0;

//render your react application
setInterval(() => {
    ReactDOM.render(
        <SecondsCounter tiempo = {contador ++} limite = {100}/>, document.querySelector("#app"));
}, 1000); 
