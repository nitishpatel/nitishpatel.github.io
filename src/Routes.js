import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Construction from "./core/Construction";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Construction} />
        
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
