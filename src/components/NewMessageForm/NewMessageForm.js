import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";
import LoadingButton from "../LoadingButton/LoadingButton";

const NewMessageForm = ({
  recipients,
  historyStateRecipientId,
  handleSubmit,
  isLoading,
}) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      recipientId: historyStateRecipientId,
      email: false,
      sms: false,
      message: "",
    },
    validationSchema: Yup.object({
      recipientId: Yup.number().required("You must choose a recipient"),
      email: Yup.boolean(),
      sms: Yup.boolean(),
      message: Yup.string()
        .min(2, "Must be atleast 2 characters")
        .max(1000, "Must be 1000 characters or less")
        .required("Required"),
    }).test("oneChecked", null, (obj) => {
      return obj.email || obj.sms
        ? true
        : new Yup.ValidationError(
            "Please select at least one delivery method",
            null,
            "sms"
          );
    }),
    onSubmit: (values) => {
      handleSubmit(
        values.recipientId,
        values.message,
        values.email,
        values.sms
      );
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* Recipient Select */}
      <Form.Group className="mb-3" controlId="recipientId">
        <Form.Label>Recipient</Form.Label>
        <Form.Select
          name="recipientId"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.recipientId}
          isInvalid={!!formik.errors.recipientId && formik.touched.recipientId}
        >
          <option value="">Select a message recipient</option>
          {recipients &&
            recipients.map((recipient) => (
              <option key={recipient.id} value={recipient.id}>
                {recipient.first_name} {recipient.last_name}
              </option>
            ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {formik.errors.recipientId}
        </Form.Control.Feedback>
      </Form.Group>
      {/* Delivery Method */}
      <Form.Group className="mb-3">
        <Form.Check
          id="email"
          name="email"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={
            // checking for custom sms error logic defined by "oneChecked" Yup test
            !!formik.errors.sms && (formik.touched.sms || formik.touched.email)
          }
        />
        <Form.Check
          id="sms"
          name="sms"
          label="Text Message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          feedback={formik.errors.sms}
          isInvalid={
            // checking for custom sms error logic defined by "oneChecked" Yup test
            !!formik.errors.sms && (formik.touched.sms || formik.touched.email)
          }
        />
      </Form.Group>
      {/* Message */}
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Write your Appreciation Message</Form.Label>
        <Form.Control
          name="message"
          as="textarea"
          rows={3}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          isInvalid={!!formik.errors.message && formik.touched.message}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.message}
        </Form.Control.Feedback>
      </Form.Group>
      <LoadingButton
        variant="primary"
        type="submit"
        loading={isLoading}
        text="Send"
      />
    </Form>
  );
};

export default NewMessageForm;
