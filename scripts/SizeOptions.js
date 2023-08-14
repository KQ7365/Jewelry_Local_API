import { setsOwnSizes } from "./TransientState.js";

export const SizeOptions = async () => {
  document.addEventListener("change", handleSizeChange);
  const response = await fetch("  http://localhost:8088/sizes");

  const sizes = await response.json();

  let sizeHTML = "";
  const divStringArray = sizes.map((size) => {
    return `<div>
  <input type='radio' name='sizes' value='${size.id}' /> ${size.carets}-carets
</div>`;
  });
  sizeHTML += divStringArray.join("");
  return sizeHTML;
};

const handleSizeChange = (changeEvent) => {
  if (changeEvent.target.name === "sizes") {
    setsOwnSizes(parseInt(changeEvent.target.value));
  }
};
