import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">Namaste React with JSX2</h1>
const Heading = () => (
    <div>
        <h1>{console.log("hey")}</h1>
        <h1 className="heading">Namaste React with Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);