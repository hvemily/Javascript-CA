import { getGames } from "./fetch-api.js"
import { cartCount } from "./count.js";
import { getfromStorage } from "./fetchstorage.js";

let localStorageList = getfromStorage('gameitem');

let cartTotal = document.querySelector(".cartCount");
cartTotal.textContent = cartCount(localStorageList);


    const gamesContainer = document.querySelector(".gamesList")

    let allGames = await getGames()

    let gamesList = []
    
    if(allGames.error === false){
    
      gamesList = allGames.games

    
      gamesContainer.innerHTML = ""
    
      for (let i = 0; i < gamesList.length; i++) {
        gamesContainer.innerHTML += `<a class="item-card" href="./product/index.html?gameid=${gamesList[i].id}">                
        <div class="image-container">
          <img src="${gamesList[i].image}" alt="${gamesList[i].title}"/>
          ${gamesList[i].onSale ? `<div class='ribbon'>SALE</div>` : ""}
        </div>
        <h3 class="title">${gamesList[i].title}</h3>
        <div class="flex-sale">
          <p class="${gamesList[i].onSale ? "on-sale" : ""}">${gamesList[i].onSale ? gamesList[i].price : ""}</p>
          <p class="current-price">$ ${gamesList[i].onSale ? gamesList[i].discountedPrice : gamesList[i].price} </p>
        </div>
      </a>`;
      }
    
    } else{
      errorContainer.innerHTML = ""

    }


// filtering by genre

const selectOptions = document.querySelector(".selected-genre");
selectOptions.addEventListener("input", filterByGenre);

function filterByGenre(event) {
  let selectedGenre = event.target.value;

  if (selectedGenre === "All") {
    // Reset gamesList to all games
    gamesList = allGames.games;

    gamesContainer.innerHTML = "";

    for (let i = 0; i < gamesList.length; i++) {
      gamesContainer.innerHTML += `<a class="item-card" href="./product/index.html?gameid=${gamesList[i].id}">                
        <img src="${gamesList[i].image}" alt="${gamesList[i].title}"/>
        <h3 class="title">${gamesList[i].title}</h3>
        <div class="flex-sale">
          <p class="${gamesList[i].onSale ? "on-sale" : ""}">${gamesList[i].onSale ? gamesList[i].price : ""}</p>
          <p class="current-price">$ ${gamesList[i].onSale ? gamesList[i].discountedPrice : gamesList[i].price} </p>
          ${gamesList[i].onSale ? `<div class='ribbon'>%</div>` : ""}
        </div>
      </a>`;
    }
    return;
  }

  let filteredList = gamesList.filter(
    (game) => game.genre.toLowerCase() === selectedGenre.toLowerCase()
  );

  gamesContainer.innerHTML = "";

  for (let i = 0; i < filteredList.length; i++) {
    gamesContainer.innerHTML += `<a class="item-card" href="./product/index.html?gameid=${filteredList[i].id}">                
      <img src="${filteredList[i].image}" alt="${filteredList[i].title}"/>
      <h3 class="title">${filteredList[i].title}</h3>
      <div class="flex-sale">
      <p class="${filteredList[i].onSale ? "on-sale" : ""}">${filteredList[i].onSale ? filteredList[i].price : ""}</p>
      <p class="current-price">$ ${filteredList[i].onSale ? filteredList[i].discountedPrice : filteredList[i].price} </p>
</div>
</a>`;
  }
}