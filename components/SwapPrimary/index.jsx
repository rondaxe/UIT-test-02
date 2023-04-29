import React from "react";
import "./SwapPrimary.css";

function SwapPrimary(props) {
  const { children, className } = props;

  return (
    <div className={`swap-primary ${className || ""}`}>
      <h1 className="title acme-regular-normal-black-48px">{children}</h1>
    </div>
  );
}

export default SwapPrimary;
