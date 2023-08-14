import { setsOwnMetals } from "./TransientState.js";

export const MetalOptions = async () => {
  document.addEventListener("change", handleMetalChange);
  const response = await fetch("http://localhost:8088/metals");

  const metals = await response.json();

  let metalsHTML = "";
  const divStringArray = metals.map((metal) => {
    return `<div>
    <input type ='radio' name='metals'  value='${metal.id}'/> ${metal.metal}
    </div>`;
  });
  metalsHTML += divStringArray.join("");
  return metalsHTML;
};

const handleMetalChange = (changeEvent) => {
  if (changeEvent.target.name === "metals") {
    setsOwnMetals(parseInt(changeEvent.target.value));
  }
};
