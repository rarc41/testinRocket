import React from "react";
import "../../styles/Spinner.css";

const Spinner = () => {
  return (
    <div className="sk-chase" data-testid="spinner">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  );
};

export default Spinner;
