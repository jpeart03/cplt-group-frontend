import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert, Form } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import LoadingButton from "../LoadingButton/LoadingButton";

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { authLoading, authError, login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      login(values.email, values.password);
      setIsSubmitted(true);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
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
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Enter Your Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          isInvalid={!!formik.errors.password && formik.touched.password}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.password}
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

export default LoginForm;
