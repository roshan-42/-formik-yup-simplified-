import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SignupFormSchema from "../Schema/SignupFormSchema";

export default function Signup() {
  return (
    <Formik
      initialValues={SignupFormSchema.cast()}
      validationSchema={SignupFormSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => {
        return (
          <Form>
            <div>
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <h1>Signup Form</h1>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="firstName"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="firstName" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Username"
                    name="userName"
                  />

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="password" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
