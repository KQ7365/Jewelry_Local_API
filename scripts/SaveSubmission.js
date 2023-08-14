import { saveOrderSubmission } from "./TransientState.js";

const handleTheClick = (clickEvent) => {
  if (clickEvent.target.id === "savesubmission") {
    saveOrderSubmission();
  }
};

export const saveSubmission = () => {
  document.addEventListener("click", handleTheClick);

  return "<button id='savesubmission'>Place Order </button>";
};
