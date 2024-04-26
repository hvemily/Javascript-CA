import { getfromStorage } from "./fetchstorage.js";


let localStorageList = getfromStorage('game-item');

const totalPrice = document.querySelector(".totalPrice")
const cartTotal = document.querySelector(".cartCount")

let cartContainer = document.querySelector(".cartInfo")

const itemWrapper = document.createElement('div') 
cartContainer.appendChild(itemWrapper);
itemWrapper.classList.add('gameWrapper');

export function cartCreator(arr){

  itemWrapper.innerHTML = ""

  if(arr.length === 0){
    return []
  }
  if (arr.length > 0){
    for(let i = 0;i < arr.length; i++){


   const singleCard = document.createElement('div')
   singleCard.classList.add('singleCard');
  
   itemWrapper.appendChild(singleCard);

   const image = document.createElement('img');
   image.src=arr[i].image
   image.alt=arr[i].title
   singleCard.appendChild(image);

   const title = document.createElement('h2')
   title.textContent = arr[i].title
   singleCard.appendChild(title);

   const qty = document.createElement('p')
   qty.textContent = arr[i].quantity
   singleCard.appendChild(qty);

   const price = document.createElement('p')
   price.textContent = arr[i].price
   singleCard.appendChild(price);

   const btn = document.createElement("button")
            btn.classList.add('itemRemover')
            btn.dataset.title = arr[i].title 
            btn.textContent = "X"
            btn.addEventListener("click", removeFromCart) 
            singleCard.appendChild(btn)
    }

    return itemWrapper;

  } else {
    return []
  }
}


function removeFromCart(event) {
   console.log("dataset", event); 
   cartContainer.innerHTML = "";
   const title = event.target.dataset.title; 

   if (localStorageList.length === 1) {
       cartContainer.innerHTML = "";
       localStorage.clear("gameitem");
       cartContainer.innerHTML = "<p class='empty'>It seems your cart is empty</p>";

       totalPrice.textContent = "$" + 0;
       cartTotal.textContent = 0;
       return;
   }

   const filterOut = localStorageList.filter(item => item.title !== title);
   localStorageList = filterOut;
   localStorage.setItem("gameitem", JSON.stringify(localStorageList));
   //let html = cartCreator(localStorageList);
   //cartContainer.appendChild(html);
   cartContainer = cartCreator(localStorageList);

   totalPrice.textContent = '$' + cartSumTotalPrice(localStorageList);
   cartTotal.textContent = cartQtyTotalCount(localStorageList);
}