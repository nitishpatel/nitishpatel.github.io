import React, { useCallback, useContext, useState } from "react";
import {  Redirect } from "react-router";
import { AuthContext } from "../Authentication.js";
import firebase from "../firebase.js";

const Signin = ({ history }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: false,
    success: false,
  });
  const { email, password } = state;
  const handleChange = (name) => (event) => {
    setState({ ...state, error: false, [name]: event.target.value });
  };
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebase.auth().signInWithEmailAndPassword(email.trim(), password);
        history.push("/admin");
      } catch (error) {
        alert(error+email);
      }
    },
    [history,email,password]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/admin" />;
  }
  return (
      <div className="container section-break">
        <div className="card login-form theme">
          <div className="card-body">
            <h3 className="card-title text-center">Log in to Codepen</h3>
            <div className="card-text">
              {state.error && (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  Incorrect username or password.
                </div>
              )}
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    onChange={handleChange("email")}
                    value={email}
                    type="email"
                    className="form-control form-control-sm"
                    id="exampleInputEmail1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    onChange={handleChange("password")}
                    value={password}
                    type="password"
                    className="form-control form-control-sm"
                    id="exampleInputPassword1"
                  />
                </div>
                <button
                  onClick={handleLogin}
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Signin;
