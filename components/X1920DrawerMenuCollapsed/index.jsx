import React from "react";
import SwapPrimary from "../SwapPrimary";
import "./X1920DrawerMenuCollapsed.css";

function X1920DrawerMenuCollapsed(props) {
  const { swapPrimaryProps } = props;

  return (
    <div className="x1920-drawer-menu-collapsed">
      <SwapPrimary className={swapPrimaryProps.className}>{swapPrimaryProps.children}</SwapPrimary>
    </div>
  );
}

export default X1920DrawerMenuCollapsed;
