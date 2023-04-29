import React from "react";
import X1920NavBar from "../X1920NavBar";
import X1920ContentPane from "../X1920ContentPane";
import X1920DrawerMenuCollapsed from "../X1920DrawerMenuCollapsed";
import "./X1920Screen.css";

function X1920Screen(props) {
  const { x1920NavBarProps, x1920ContentPaneProps, x1920DrawerMenuCollapsedProps } = props;

  return (
    <div className="x1920-screen screen">
      <X1920NavBar swapPrimaryProps={x1920NavBarProps.swapPrimaryProps} />
      <X1920ContentPane swapPrimaryProps={x1920ContentPaneProps.swapPrimaryProps} />
      <X1920DrawerMenuCollapsed swapPrimaryProps={x1920DrawerMenuCollapsedProps.swapPrimaryProps} />
    </div>
  );
}

export default X1920Screen;
