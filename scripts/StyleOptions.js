import { setsOwnStyles } from "./TransientState.js";

export const StyleOptions = async () => {
  document.addEventListener("change", handleStyleChange);
  const response = await fetch(" http://localhost:8088/styles");

  const styles = await response.json();

  let stylesHTML = "";
  const divStringArray = styles.map((style) => {
    return `<div>
    <input type='radio' name='styles' value='${style.id}'/> ${style.style}
    </div>`;
  });
  stylesHTML += divStringArray.join("");
  return stylesHTML;
};

const handleStyleChange = (changeEvent) => {
  if (changeEvent.target.name === "styles") {
    setsOwnStyles(parseInt(changeEvent.target.value));
  }
};
