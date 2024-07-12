import { useState } from "react";
import "./signup.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirmedpassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,17}$/,
          "Password must be 8-17 characters and contain at least one letter, one number and a special character"
        ),
      confirmedpassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section>
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <label>Your name</label>
        <input
          type="text"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
        />
        {formik.errors.name && <p className="errorMsg">{formik.errors.name}</p>}
        <label>Email address</label>
        <input
          type="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
        />
        {formik.errors.email && <p className="errorMsg">{formik.errors.email}</p>}
        <label>Password</label>
        <input
          type="text"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />
        {formik.errors.password && <p className="errorMsg">{formik.errors.password}</p>}
        <label>Confirm Password</label>
        <input
          type="text"
          id="confirmedpassword"
          value={formik.values.confirmedpassword}
          onChange={formik.handleChange}
          placeholder="Enter your confirm password"
        />
        {formik.errors.confirmedpassword && <p className="errorMsg">{formik.errors.confirmedpassword}</p>}
        <label>Phone</label>
        <input
          type="text"
          id="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Enter your phone number"
        />
        {formik.errors.phone && <p className="errorMsg">{formik.errors.phone}</p>}
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};

export default SignupForm;
