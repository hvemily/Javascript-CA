import { getGames } from "./fetch-api.js"


    const gamesContainer = document.querySelector(".gamesList")

    const allGames = await getGames()

    let gamesList = []
    
    if(allGames.error === false){
    
      gamesList = allGames.games
    
      gamesContainer.innerHTML = ""
    
      for (let i = 0; i < gamesList.length; i++) {
        gamesContainer.innerHTML += `<div class="games">  
          <img src="${gamesList[i].image}" alt="">
          <p>${gamesList[i].title}</p>
          <p>${gamesList[i].price}</p>
          <p>${gamesList[i].discountedPrice}</p>
          
        </div>`
      }
    
    } else{
      errorContainer.innerHTML = ""

    }

    console.log(gamesList);

// filtering by genre

function filterByGenre(event) {

  let selectedGenre = event.target.value 

  if (selectedGenre === "All"){

    getAPI.innerHTML = ""

      for(let i = 0; i <gamesList.length; i++){
        getAPI.innerHTML += `<a class="item-card" href="/product/index.html?arrid=${gameList[i].id}">                
        <img src="${gameList[i].image}" alt="${gameList[i].title}"/>
        <h3 class="title">${gameList[i].title}</h3>
        <div class="flex-sale">
          <p class="${gameList[i].onSale ? "on-sale" : ""}">${gameList[i].onSale ? gameList[i].price : ""}</p>
          <p class="current-price">$ ${gameList[i].onSale ? gameList[i].discountedPrice : gameList[i].price} </p>
        </div>
      </a>` 
      }
      return
    }

  let filteredList = gamesList.filter(game => game.genre.toLowerCase() === selectedGenre.toLowerCase());

  console.log("new filter list to sort by: ", filteredList);


  getAPI.innerHTML = ""

  for (let i = 0; i < filteredList.length; i++){  // we use the previous variable of 'filteredList.length' that it has generated from before.
     getAPI.innerHTML += `<a class="item-card" href="/product/index.html?arrid=${filteredList[i].id}">                
      <img src="${filteredList[i].image}" alt="${filteredList[i].title}"/>
      <h3 class="title">${filteredList[i].title}</h3>
      <div class="flex-sale">
      <p class="${filteredList[i].onSale ? "on-sale" : ""}">${filteredList[i].onSale ? filteredList[i].price : ""}</p>
      <p class="current-price">$ ${filteredList[i].onSale ? filteredList[i].discountedPrice : filteredList[i].price} </p>
                           </div>
                         </a>`
   };
 };

