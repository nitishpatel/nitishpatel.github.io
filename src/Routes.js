import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";
import Signin from "./admin/Signin";
import { AuthProvider } from "./Authentication";
import Home from "./core/Home";
import PrivateRoute from "./PrivateRoutes";

const Routes = () => {
  return (
    <AuthProvider>

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Signin} />
        <PrivateRoute path="/admin" exact component={AdminDashboard} />
        
      </Switch>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default Routes;
