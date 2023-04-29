import React from "react";
import SwapPrimary from "../SwapPrimary";
import "./X1920NavBar.css";

function X1920NavBar(props) {
  const { swapPrimaryProps } = props;

  return (
    <div className="x1920-nav-bar">
      <SwapPrimary className={swapPrimaryProps.className}>{swapPrimaryProps.children}</SwapPrimary>
    </div>
  );
}

export default X1920NavBar;
