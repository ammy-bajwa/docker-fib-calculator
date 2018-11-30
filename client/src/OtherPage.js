import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="App">
      <header>
        Other page <Link to="/"> Go back to home </Link>{" "}
      </header>{" "}
    </div>
  );
};
