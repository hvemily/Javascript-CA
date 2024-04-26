import { cartCount } from "./count.js";
import { getfromStorage } from "./fetchstorage.js";

let localStorageList = getfromStorage('gameitem');


let cartTotal = document.querySelector(".cartCount");

cartTotal.textContent = cartCount(localStorageList);


const baseURL = "https://api.noroff.dev/api/v1/gamehub/"


let gameDetail = {};

const itemContainer = document.querySelector(".productItem");
const parameterString = window.location.search;     
const searchParameters = new URLSearchParams(parameterString);
const arrId = searchParameters.get("gameid");
const addToCart = document.querySelector('.addGame');

console.log(arrId);

async function singleProductPage() {
    try{

        const req = await fetch(baseURL + arrId);

        if(!req.ok){ 

            errorBox.innerHTML =  `<div class="error">   
            <h1>Something went wrong</h1>
            <p>Error status: 404</p>
            <p>Something went wrong</p>
          </div>`;
throw new Error('Network response was not ok');

}

const result = await req.json();

        gameDetail = result;

        console.log("Should be all...", result)

        itemContainer.innerHTML = `
          <div class="item">
                                        <img src="${gameDetail.image}" alt="${gameDetail.title}">
                                        <div class="item-info">
                                            <div>
                                                <h2>${gameDetail.title}</h2>
                                                <p>${gameDetail.onSale ? "&#x2105;" : ""} </p>
                                            </div>            
                                            <p>Released: ${gameDetail.released}</p>
                                            <p>Genre:${gameDetail.genre}</p>
                                            <p>Description: ${gameDetail.description}</p>
                                            <p>$ ${gameDetail.onSale ? gameDetail.discountedPrice : gameDetail.price}</p>
                                        </div>
      </div>`;

    } catch(error){
        
        console.error('Fetch error:'); 

    }
} 

singleProductPage()

// cart functionality 

addToCart.addEventListener('click', addToCartClicked);
  
  function addToCartClicked(){


      let gameToAdd = {
        image: gameDetail.image, 
        title: gameDetail.title, 
        price: gameDetail.onSale ? gameDetail .discountedPrice : gameDetail.price,
        quantity: 1,
      }


    const gameInCart = isGameInCart(localStorageList, gameDetail.title);

    if(!gameInCart)  {

      localStorageList.push(gameToAdd);

      localStorage.setItem("gameitem", JSON.stringify(localStorageList));
       cartTotal.textContent = cartCount(localStorageList)
    }

    else {
      alert("The item is in the cart")
    }
  };


  // Checking if game already in cart
  function isGameInCart(item, titleToCheck){

    const found = item.some(game => game.title === titleToCheck);

    if(found){
      return true
    }
  }

