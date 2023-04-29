import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import B2Vertest from "./components/B2Vertest";
import B1Vertest from "./components/B1Vertest";
import X1920x1080UITDrawerPrimary from "./components/X1920x1080UITDrawerPrimary";
import X1920Screen from "./components/X1920Screen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/b2-vertest">
          <B2Vertest />
        </Route>
        <Route path="/b1-vertest">
          <B1Vertest />
        </Route>
        <Route path="/1920x1080-uit-drawer-primary">
          <X1920x1080UITDrawerPrimary swapPrimaryProps={x1920x1080UITDrawerPrimaryData.swapPrimaryProps} />
        </Route>
        <Route path="/:path(|1920-screen)">
          <X1920Screen
            x1920NavBarProps={x1920ScreenData.x1920NavBarProps}
            x1920ContentPaneProps={x1920ScreenData.x1920ContentPaneProps}
            x1920DrawerMenuCollapsedProps={x1920ScreenData.x1920DrawerMenuCollapsedProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const swapPrimary1Data = {
    children: "SWAP",
};

const x1920x1080UITDrawerPrimaryData = {
    swapPrimaryProps: swapPrimary1Data,
};

const swapPrimary2Data = {
    children: "SWAP",
    className: "swap-primary-1",
};

const x1920NavBarData = {
    swapPrimaryProps: swapPrimary2Data,
};

const swapPrimary3Data = {
    children: "1920",
    className: "swap-primary-2",
};

const x1920ContentPaneData = {
    swapPrimaryProps: swapPrimary3Data,
};

const swapPrimary4Data = {
    children: "SWAP",
    className: "swap-primary-3",
};

const x1920DrawerMenuCollapsedData = {
    swapPrimaryProps: swapPrimary4Data,
};

const x1920ScreenData = {
    x1920NavBarProps: x1920NavBarData,
    x1920ContentPaneProps: x1920ContentPaneData,
    x1920DrawerMenuCollapsedProps: x1920DrawerMenuCollapsedData,
};

