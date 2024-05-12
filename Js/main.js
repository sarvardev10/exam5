document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tickets = document.getElementById("tickets").value;

    const confirmationMessage = `Thank you, ${name}! Your booking for ${tickets} ticket(s) for the UFC fight has been confirmed. 
                                  We've sent a confirmation email to ${email}.`;

    document.getElementById("confirmation").innerText = confirmationMessage;
  });

const changePage = (page) => {
  let first = document.getElementById("first");
  let second = document.getElementById("second");
  if (page === "first") {
    first.setAttribute("style", "display:block");
    second.setAttribute("style", "display:none");
  } else if (page === "second") {
    first.setAttribute("style", "display:none");
    second.setAttribute("style", "display:block");
  }
};

//product
const root = document.querySelector(".root");
const openBtn = document.querySelector(".openBtn");
const header = document.querySelector(".header");
const closeBtn = document.querySelector(".close");
const url = "https://fakestoreapi.com/products";

let data = [];

async function fetchApi(url) {
  try {
    let response = await fetch(url);
    if (response.status === 200) {
      data = await response.json();
      renderData(data);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}
fetchApi(url);

function renderData(e) {
  root.textContent = "";
  if (e.length) {
    const fragment = document.createDocumentFragment();
    e.forEach((element) => {
      const card = document.createElement("table");
      card.className = "table";
      card.innerHTML = `
                <tbody>
                    <tr>
                    <th scope="row">${element.id}</th>
                    <td>${element.title}</td>
                    <td>${element.category}</td>
                    <td>${element.price}</td>
                    </tr>
                </tbody>
            `;
      fragment.appendChild(card);
    });
    root.appendChild(fragment);
  }
}

openBtn.addEventListener("click", (e) => {
  header.classList.add("open");
});

closeBtn.addEventListener("click", (e) => {
  header.classList.remove("open");
});

openBtn.addEventListener("click", (e) => {
  header.classList.add("open");
});

const product = document.querySelector(".product");
const seconds = document.querySelector("#second");

product.addEventListener("click", (e) => {
  seconds.classList.remove("none");
});
