import React from "react";
import { FormGroup, FormLabel, FormSelect } from "react-bootstrap";

const SelectRecipient = ({ recipients, handleSelect }) => {
  return (
    <FormGroup className="mb-3">
      <FormLabel>Select a recipient to edit:</FormLabel>
      <FormSelect onChange={handleSelect}>
        <option value={0}>Select a recipient</option>
        {recipients ? (
          recipients.map((recipient) => (
            <option key={recipient.id} value={recipient.id}>
              {recipient.first_name} {recipient.last_name}
            </option>
          ))
        ) : (
          <option disabled>You have don't have any recipients</option>
        )}
      </FormSelect>
    </FormGroup>
  );
};

export default SelectRecipient;
