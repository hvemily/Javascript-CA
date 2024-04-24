const baseURL = "https://api.noroff.dev/api/v1/gamehub/"

let gameInfo = {}
//let localStorageList = getLocalKey("gameitem")

const itemContainer = document.querySelector(".productItem");

const parameterString = window.location.search;     

const searchParameters = new URLSearchParams(parameterString);

const arrId = searchParameters.get("gameid");

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

        let gameInfo = result

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

const addGameBtn = document.getElementById("addGame");

addGameBtn.addEventListener("click", addItemToStorage);

async function addItemToStorage(){

  const req = await fetch(baseURL + arrId);

  const gameInfo = await req.json()
    let qty = 1; 

    // Here we make our own array, which we can set into the localStorage
    let gameToAdd = {
        title: gameInfo.title,
        url: gameInfo.image,
        quantity: qty,
        price: gameInfo.onSale ? gameInfo.discountedPrice : gameInfo.price,
    }

    const isGameStored = isItemincart(localStorageList, gameInfo.title) // See below function

        if(!isGameStored){   //Depending on return of function below, if it returns TRUE, 'ELSE' will run
                       // If item is not in localStorage the 'IF' will run and set the selfmade array into localStorage,
        localStorageList.push(gameToAdd)

        localStorage.setItem("gameitem", JSON.stringify(localStorageList))

  } 
  else {     

    alert("Item is already in cart") // Indicate the user that the merch is in the cart already ( This allows only 1 item!)

    //  !!  NOTE: Quantity increase is not needed in assignment. 

  }
}


// this function works like this:
// it's being used at line 107, inside the "()" we send key values at 'localStorageList' and 'movieDetail.data.title'
// which we have access to already.
// Info from localStorage is done by importing the function 'getLocalStorage.js' allowing us to see info
// from the local storage.
//
// These words will then be put into the function below replacing  the value already represented inside 
// the function.
// 'item' becomes 'localStorageList' and titleToCheck becomes the title of the game (depending on the games we clicked)
// replacing the words and makes the function work properly.

function isItemincart(item, titleToCheck){

    const found = item.some(obj => obj.title === titleToCheck);
  
    if(found) {
      return true
    }
  }


  function getLocalKey(key) {
    const savedInStorage = localStorage.getItem(key)
  
    if (!savedInStorage) {
      return []
    }
  
    return JSON.parse(savedInStorage)
    
  }