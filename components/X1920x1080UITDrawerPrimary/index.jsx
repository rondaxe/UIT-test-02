import React from "react";
import SwapPrimary from "../SwapPrimary";
import "./X1920x1080UITDrawerPrimary.css";

function X1920x1080UITDrawerPrimary(props) {
  const { swapPrimaryProps } = props;

  return (
    <div className="x1920x1080-uit-drawer-primary screen">
      <div className="x1920x1080-uit-drawer-primary-1">
        <SwapPrimary>{swapPrimaryProps.children}</SwapPrimary>
      </div>
    </div>
  );
}

export default X1920x1080UITDrawerPrimary;
