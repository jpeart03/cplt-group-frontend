import { useState } from "react";
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
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords do not match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      register(values.email, values.password, values.confirmPassword);
      setIsSubmitted(true);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
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
        <Form.Label>Confirm Password</Form.Label>
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
