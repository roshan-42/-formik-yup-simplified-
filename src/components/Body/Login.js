import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <form action="">
            <h1>Login Form</h1>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Password"
            />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
