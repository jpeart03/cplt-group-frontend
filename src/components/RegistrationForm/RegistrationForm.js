import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert, Form } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import LoadingButton from "../LoadingButton/LoadingButton";

const RegistrationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { authLoading, authError, register } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords do not match")
        .required("Required"),
      phone: Yup.string().matches(
        /[+]\d{11}/,
        "Phone number is not the correct format."
      ),
    }),
    onSubmit: (values) => {
      register(
        values.userName,
        values.email,
        values.password,
        values.confirmPassword,
        values.firstName,
        values.lastName,
        values.phone
      );
      setIsSubmitted(true);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address *</Form.Label>
        <Form.Control
          name="email"
          type="text"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          isInvalid={!!formik.errors.email && formik.touched.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password *</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Choose a password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          isInvalid={!!formik.errors.password && formik.touched.password}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password *</Form.Label>
        <Form.Control
          name="confirmPassword"
          type="password"
          placeholder="Type your password again"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          isInvalid={
            !!formik.errors.confirmPassword && formik.touched.confirmPassword
          }
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.confirmPassword}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="userName"
          type="text"
          placeholder="Enter a Username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          name="phone"
          type="text"
          placeholder="Mobile Number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          isInvalid={!!formik.errors.phone && formik.touched.phone}
        />
        <Form.Text>Please use the following format: +11231231234</Form.Text>
        <Form.Control.Feedback type="invalid">
          {formik.errors.phone}
        </Form.Control.Feedback>
      </Form.Group>

      <LoadingButton
        variant="primary"
        type="submit"
        text="Submit"
        isLoading={authLoading}
      />
      {!!(authError && isSubmitted) && (
        <Alert className="mt-3" variant="danger">
          <p>Sorry, something went wrong:</p>
          <p>
            <strong>{authError.message}</strong>
          </p>
          <p>Please try again later.</p>
        </Alert>
      )}
    </Form>
  );
};

export default RegistrationForm;
