import { MetalOptions } from "./MetalOptions.js";
import { StyleOptions } from "./StyleOptions.js";
import { SizeOptions } from "./SizeOptions.js";
import { saveSubmission } from "./SaveSubmission.js";
import { Orders } from "./Orders.js";

const container = document.querySelector("#container");

const render = async () => {
  const metalOptionsHTML = await MetalOptions();
  const styleOptionsHTML = await StyleOptions();
  const sizeOptionsHTML = await SizeOptions();
  const buttonOrder = await saveSubmission();
  const OrderHTML = await Orders();
  container.innerHTML = `
 
  <h1 class="Title">Kneel Diamonds</h1>
 
        <article class="choices">
            <section class="choices__metals">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>
<h3 class="print">Click below to place order after selecting your custom options!</h3>
        <article class="order">

        ${buttonOrder}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
                ${OrderHTML}
        </article>
    `;
};

document.addEventListener("savingOrdersHTML", render);
render();
