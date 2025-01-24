import React from "react";

const EligibilityComponent = ({ response }) => {
  const getEligibility = (response) => {
    // Check if response and response.data exist
    if (response && response.data) {
      const data = response.data;
      
      // If response.data is an array, loop through it to find the eligibility value
      if (Array.isArray(data)) {
        for (const item of data) {
          if (item.attributes && item.attributes.eligibility) {
            return item.attributes.eligibility.eligible;
          }
        }
      } else if (typeof data === "object") { // If response.data is an object
        if (data.attributes && data.attributes.eligibility) {
          return data.attributes.eligibility.eligible;
        }
      }
    }
    // Return undefined if the eligibility value is not found
    return undefined;
  };

  const eligibilityValue = getEligibility(response);

  return (
    <div>
      <h1>Eligibility Check</h1>
      {eligibilityValue !== undefined ? (
        <p>Eligibility: {eligibilityValue !== null ? eligibilityValue.toString() : "Null"}</p>
      ) : (
        <p>Eligibility information is not available.</p>
      )}
    </div>
  );
};

// Example usage
const response = {
  data: {
    id: "51f17ec8-ce72-4ae3-8f6e-3bcd4504c6fe",
    type: "DISPUTE_ELIBILITY_RESPONSE",
    attributes: {
      isEligible: false,
      reasonCode: "INVALID_TRAN_CODE",
      reasonDescription:
        "Unfortunately, this transaction is not eligible to be disputed on this form.",
      eligibility: { eligible: null }, // Example eligibility structure
    },
  },
};


