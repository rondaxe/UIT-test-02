import React from "react";
import SwapPrimary from "../SwapPrimary";
import "./X1920ContentPane.css";

function X1920ContentPane(props) {
  const { swapPrimaryProps } = props;

  return (
    <div className="x1920-content-pane">
      <SwapPrimary className={swapPrimaryProps.className}>{swapPrimaryProps.children}</SwapPrimary>
    </div>
  );
}

export default X1920ContentPane;
