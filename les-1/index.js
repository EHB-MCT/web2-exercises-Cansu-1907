"use strict";

window.onload = function () {
  console.log("page loaded");

  const result = document.getElementById("result");
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form works");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let order = document.getElementById("order").value;
    console.log(`${name}, ${email}, ${order}`);

    orderr.name = name;
    orderr.email = email;
    orderr.order = order;

    result.insertAdjacentHTML("afterbegin", printOrder(orderr));
  });

  function printOrder(orderdetails) {
    return `<p>The following order has been ordered by ${orderdetails.name}, they ordered ${orderdetails.order}. Their email is ${orderdetails.email}. </p>`;
  }

  let orderr = {
    name: "",
    email: "",
    order: "",
  };
};
// window.onload = function () {
//     console.log("page loaded");

//     const result = document.getElementById("result");
//     const form = document.getElementById("form");
//     form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       console.log("form works");
//       let name = document.getElementById("name").value;
//       let email = document.getElementById("email").value;
//       let order = document.getElementById("order").value;
//       console.log(`${name}, ${email}, ${order}`);

//       let htmlString = `<p>The following order has been ordered by ${name}, they ordered ${order}. Their email is ${email}. </p>`;
//       result.insertAdjacentHTML("afterbegin", htmlString);
//     });
//   };
