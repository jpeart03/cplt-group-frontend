import { useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import LoadingButton from "../LoadingButton/LoadingButton";
import { useAuth } from "../../contexts/AuthContext";

const EditProfileForm = () => {
  const { currentUser, deactivate, editUser, refreshUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  const formik = useFormik({
    initialValues: currentUser,
    validationSchema: Yup.object({
      first_name: Yup.string().max(100, "Must be fewer than 100 characters"),
      last_name: Yup.string().max(100, "Must be fewer than 100 characters"),
      username: Yup.string()
        .matches(
          /^[A-Za-z0-9@.+-_]*$/gi,
          "Can only contain numbers, letters, and the following: @ . + - _"
        )
        .max(10, "Must be 10 or fewer characters")
        .required("Required"),
      email: Yup.string()
        .email("Must be a valid email address")
        .required("Required"),
      phone: Yup.string().matches(
        /[+]\d{11}/,
        "Phone number is not the correct format"
      ),
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      editUser(values);
      // added refreshUser so that on the dashboard the Profile changes will be reflected immediately without refreshing the page
      // refreshUser();
      setIsLoading(false);
    },
  });
  return (
    // using the currentUser attribute names from DRF backend
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="first_name">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="first_name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.first_name}
          isInvalid={!!formik.errors.first_name && formik.touched.first_name}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.first_name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="last_name">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="last_name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.last_name}
          isInvalid={!!formik.errors.last_name && formik.touched.last_name}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.last_name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          isInvalid={!!formik.errors.username && formik.touched.username}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.username}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          isInvalid={!!formik.errors.email && formik.touched.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          isInvalid={!!formik.errors.phone && formik.touched.phone}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.phone}
        </Form.Control.Feedback>
      </Form.Group>

      <LoadingButton
        variant="primary"
        type="submit"
        className="me-2"
        text="Update"
        isLoading={isLoading}
      />

      <Button
        variant="danger"
        onClick={() => {
          deactivate();
          history.push("/");
        }}
      >
        Delete My Account
      </Button>
    </Form>
  );
};

export default EditProfileForm;
