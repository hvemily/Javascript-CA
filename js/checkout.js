import { cartCount, cartSumTotalPrice } from "./count.js";
import { getfromStorage } from "./fetchstorage.js";
import { cartCreator } from "./cartcreator.js";

let localStorageList = getfromStorage('gameitem');

const totalPrice = document.querySelector(".totalPrice")
const cartTotal = document.querySelector(".cartCount")

const purchaseBtn = document.querySelector(".purchaseBtn")


let cartContainer = document.querySelector(".cartInfo");
cartTotal.textContent = cartCount(localStorageList);

if (localStorageList.length > 0){

  cartContainer = cartCreator(localStorageList)

} else{

cartContainer.innerHTML = "<p class='empty'>Your cart is empty</p>"

}

totalPrice.textContent = "$" + cartSumTotalPrice(localStorageList).toFixed(2);

purchaseBtn.addEventListener("click", purchaseConfirmed);

function purchaseConfirmed(){
  localStorage.clear("gameitem");
}