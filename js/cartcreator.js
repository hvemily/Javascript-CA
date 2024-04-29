import { getfromStorage } from "./fetchstorage.js";

let localStorageList = getfromStorage('gameitem') || [];

const totalPrice = document.querySelector(".totalPrice");
const cartTotal = document.querySelector(".cartCount");
const cartContainer = document.querySelector(".cartInfo");

const itemWrapper = document.createElement('div');
itemWrapper.classList.add('gameWrapper');
cartContainer.appendChild(itemWrapper);

export function cartCreator(arr) {
  itemWrapper.innerHTML = "";

  if (arr.length === 0) {
    cartContainer.innerHTML = "<p class='empty'>Your cart is empty</p>";
    totalPrice.textContent = "$" + 0;
    cartTotal.textContent = 0;
    return;
  }

  arr.forEach(item => {
    const singleCard = document.createElement('div');
    singleCard.classList.add('singleCard');

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;
    singleCard.appendChild(image);

    const title = document.createElement('h2');
    title.textContent = item.title;
    singleCard.appendChild(title);

    const qty = document.createElement('p');
    qty.textContent = item.quantity;
    singleCard.appendChild(qty);

    const price = document.createElement('p');
    price.textContent = item.price;
    singleCard.appendChild(price);

    const btn = document.createElement("button");
    btn.classList.add('itemRemover');
    btn.dataset.title = item.title;
    btn.textContent = "X";
    btn.addEventListener("click", removeFromCart);
    singleCard.appendChild(btn);

    itemWrapper.appendChild(singleCard);
  });

  // Calculating total and updating the cart total display
  const total = arr.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  totalPrice.textContent = "$" + total;
  cartTotal.textContent = arr.length;
}

function removeFromCart(event) {
  const title = event.target.dataset.title;

  // Filter out item with matching title from localStorageList
  localStorageList = localStorageList.filter(item => item.title !== title);

  // Updating localStorage with filtered list
  localStorage.setItem("gameitem", JSON.stringify(localStorageList));

  // Refresh cart display based on the updated list
  cartCreator(localStorageList);
}

