import { useState } from "react";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../contexts/AuthContext";
import { createNewRecipient } from "../../api/recipientCalls";
import LoadingButton from "../LoadingButton/LoadingButton";

const RecipientForm = () => {
  const { authToken, currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      relationshipType: "Personal",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Required"),
      phone: Yup.string()
        .matches(/[+]\d{11}/, "Phone number is not the correct format")
        .required("Required"),
      firstName: Yup.string().max(100, "Must be fewer than 100 characters"),
      lastName: Yup.string().max(100, "Must be fewer than 100 characters"),
      relationshipType: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      let recipientValues = {
        first_name: values.firstName,
        last_name: values.lastName,
        relationship_type: values.relationshipType,
        email: values.email,
        phone: values.phone,
        user: currentUser.id,
      };
      await createNewRecipient(recipientValues, authToken);
      setIsLoading(false);
    },
  });

  return (
    <Form id="newRecForm" onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address *</Form.Label>
        <Form.Control
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.email && formik.touched.email}
        />
        <Form.Text className="text-muted">
          We'll never share your recipient's email with anyone else.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone Number *</Form.Label>
        <Form.Control
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.phone && formik.touched.phone}
        />
        <Form.Text className="text-muted">
          We'll never share your recipient's phone number with anyone else.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {formik.errors.phone}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.firstName && formik.touched.firstName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.lastName && formik.touched.lastName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="relationshipType">
        <Form.Label>Relationship Type</Form.Label>
        <Form.Select
          name="relationshipType"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={
            !!formik.errors.relationshipType && formik.touched.relationshipType
          }
        >
          <option value="Personal">Personal</option>
          <option value="Professional">Professional</option>
        </Form.Select>
      </Form.Group>

      <LoadingButton
        variant="primary"
        type="submit"
        text="Submit"
        isLoading={isLoading}
      />
    </Form>
  );
};

export default RecipientForm;
