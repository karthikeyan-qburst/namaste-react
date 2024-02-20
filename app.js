import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {className:"heading"}, "Namaste react world from app.js");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);