import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Formik} from 'formik';
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';
import Home from './Home';

const ValidatedLoginForm = () => (
  <Formik
  initialValues={{ email: "", password: "" }}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("Logging in", values);
      setSubmitting(false);
    }, 500);
  }}

  validationSchema = { Yup.object().shape({
    email: Yup.string()
    .email()
    .required("Required"),
    password: Yup.string()
    .required("No password provided!")
    .min(8, "Password in too short! Should be 8 chracters long.")
    .matches(/(?=.*[0-9])/, "Password must contain one number!")

  })}
  >
    { props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return ( 
        <form className= "mt-1" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input  name="email" type="text" placeholder="Enter your email" value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>

          )}
          <label className="login" htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>

          )}
<Router>
<Link to="/home" className="navbar-brand">
<button type="submit" className="btn btn-info" >Button</button>
</Link>
</Router>
  

        </form>
      );
    }}
</Formik>
);

export default ValidatedLoginForm;