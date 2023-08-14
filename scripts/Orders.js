export const Orders = async () => {
  const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size"
  );
  const orders = await fetchResponse.json();

  let ordersHTML = "";

  const ordersArray = orders.map((order) => {
    const orderPrice = order.metal.price + order.style.price + order.size.price;
    return `<div>
  <h3 name='orders' value='${order.id}' /># ${order.id} costs $${orderPrice}
</div>`;
  });
  ordersHTML += ordersArray.join("");
  return ordersHTML;
};
