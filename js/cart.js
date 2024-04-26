import { cartCount } from "./count.js";
import { getfromStorage } from "./fetchstorage.js";

let localStorageList = getfromStorage('gameitem');

let cartTotal = document.querySelector(".cartCount");
cartTotal.textContent = cartCount(localStorageList);