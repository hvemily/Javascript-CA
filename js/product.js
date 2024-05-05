import { cartCount } from "./count.js";
import { getGames } from "./fetch-api.js";
import { getfromStorage } from "./fetchstorage.js";

let localStorageList = getfromStorage('gameitem');


let cartTotal = document.querySelector(".cartCount");

cartTotal.textContent = cartCount(localStorageList);




const baseURL = "https://api.noroff.dev/api/v1/gamehub/"


let gameDetail = {};

const itemContainer = document.querySelector(".insertInfo");
const imageContainer = document.querySelector(".insertImg")
const parameterString = window.location.search;     
const searchParameters = new URLSearchParams(parameterString);
const arrId = searchParameters.get("gameid");
const addToCart = document.querySelector('.addGame');

async function singleProductPage() {
    try{

        const req = await fetch(baseURL + arrId);

        if(!req.ok){ 

            errorBox.innerHTML =  `<div class="error">   
            <h1>Something went wrong</h1>
            <p>Error status: 404</p>
            <p>Something went wrong</p>
          </div>`;
          
          
          throw new Error('Network response not ok');

}

const result = await req.json();

        gameDetail = result;


        imageContainer.innerHTML =`
        <img src="${gameDetail.image}" alt="${gameDetail.title}"/>
        ${gameDetail.onSale ? '<div class="ribbon">SALE</div>' : ''}
    `;
                                    

        itemContainer.innerHTML = `
        <h2>${gameDetail.title}</h2>            
        <p>Released: ${gameDetail.released}</p>
        <p>Genre: ${gameDetail.genre}</p>
        <p>Description: ${gameDetail.description}</p>
        <div class="prices">
            <p class="${gameDetail.onSale ? "on-sale" : ""}">
                ${gameDetail.onSale ? "$" + gameDetail.price : ""}
            </p>
            <p class="current-price">
                $ ${gameDetail.onSale ? gameDetail.discountedPrice : gameDetail.price}
            </p>
        </div>
    `;


    } catch(error){
        
        console.error('Fetch error:'); 

    }
} 



singleProductPage()

// cart function 

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
      alert("The item is already in the cart")
    }
  };

  


  // check if game is in cart
  function isGameInCart(item, titleToCheck){

    const found = item.some(game => game.title === titleToCheck);

    if(found){
      return true
    }
  }
