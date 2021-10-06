import { useFormik } from "formik";
import * as Yup from "yup";
import { Badge, Form, Spinner } from "react-bootstrap";
import debounce from "lodash.debounce";
import { useState, useMemo } from "react";
import { getSentimentAnalysis } from "../../api/textAnalysis";
import LoadingButton from "../LoadingButton/LoadingButton";
import "./NewMessageForm.scss";

const NewMessageForm = ({
  recipients,
  historyStateRecipientId,
  handleSubmit,
  isLoading,
}) => {
  const [sentiment, setSentiment] = useState();
  const [sentimentLoading, setSentimentLoading] = useState(false);

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

  const analyzeText = (event) => {
    if (event.target.value.trim().length > 1) {
      getSentimentAnalysis(event.target.value).then((sentimentResult) => {
        setSentiment(sentimentResult.overallSentiment);
        setSentimentLoading(false);
      });
    } else {
      setSentiment(null);
      setSentimentLoading(false);
    }
  };

  const debouncedTextAnalysis = useMemo(() => debounce(analyzeText, 700), []);

  const generateSentimentElement = () => {
    if (sentiment === "positive") {
      return (
        <Badge pill className="sentiment-pill" bg="success">
          {sentiment && !sentimentLoading ? (
            sentiment
          ) : (
            <Spinner as="span" animation="grow" size="sm" />
          )}
        </Badge>
      );
    } else if (sentiment === "negative") {
      return (
        <Badge pill className="sentiment-pill" bg="danger">
          {sentiment && !sentimentLoading ? (
            sentiment
          ) : (
            <Spinner as="span" animation="grow" size="sm" />
          )}
        </Badge>
      );
    } else {
      return (
        <Badge pill className="sentiment-pill" bg="secondary">
          {sentiment && !sentimentLoading ? (
            sentiment
          ) : (
            <Spinner as="span" animation="grow" size="sm" />
          )}
        </Badge>
      );
    }
  };

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
      <Form.Group className="mb-3 sentiment-group" controlId="message">
        <Form.Label>Write your Appreciation Message</Form.Label>
        <Form.Control
          name="message"
          as="textarea"
          rows={5}
          onChange={(e) => {
            formik.handleChange(e);
            setSentimentLoading(true);
            debouncedTextAnalysis(e);
          }}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          isInvalid={!!formik.errors.message && formik.touched.message}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.message}
        </Form.Control.Feedback>
        {sentiment && generateSentimentElement()}
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
