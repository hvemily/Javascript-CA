
import { getfromStorage } from "./localstorage.js";
import { cartCount } from "./count.js";

let localStorageList = getfromStorage('gameitem');

const baseURL = "https://api.noroff.dev/api/v1/gamehub/"

let gameInfo = {}

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

        gameInfo = result;

        console.log("Should be all...", result)

        itemContainer.innerHTML = `
          <div class="item">
                                        <img src="${gameInfo.image}" alt="${gameInfo.title}">
                                        <div class="item-info">
                                            <div>
                                                <h2>${gameInfo.title}</h2>
                                                <p>${gameInfo.onSale ? "&#x2105;" : ""} </p>
                                            </div>            
                                            <p>Released: ${gameInfo.released}</p>
                                            <p>Genre:${gameInfo.genre}</p>
                                            <p>Description: ${gameInfo.description}</p>
                                            <p>$ ${gameInfo.onSale ? gameInfo.discountedPrice : gameInfo.price}</p>
                                        </div>
      </div>`;

    } catch(error){
        
        console.error('Fetch error:'); 

    }
} 

singleProductPage()

// cart functionality 

addToCart.addEventListener('click', addToCartClicked);

function isItemincart(item, titleToCheck){

  function isItemInCart(item, titleToCheck){
    const found = item.some(obj => obj.title === titleToCheck);
    return found;
    }
  }


  function getLocalKey(key) {
    const savedInStorage = localStorage.getItem(key)
  
    if (!savedInStorage) {
      return []
    }
  
    return JSON.parse(savedInStorage)
    
  }


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
       cartCount.textContent = cartCount(localStorageList)
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