import { getGames } from "./fetch-api.js"


    const gamesContainer = document.querySelector(".gamesList")

    const allGames = await getGames()

    let gamesList = []
    
    if(allGames.error === false){
    
      gamesList = allGames
    
      gamesContainer.innerHTML = ""
    
     for(let i = 0; i < gamesList.length; i++){   
          gamesContainer.innerHTML += `<img src="${gamesList[i].data.image.url}" alt="">
               `
         }
    
    } else{
      errorContainer.innerHTML = ""

      console.log(gamesContainer);


      // errorContainer.innerHTML += `<div class="error">
      //               <h1>${allGames.msg}</h1>
      //               <p>Error status: ${allGames.status}</p>
      //               <p>Something went wrong</p>
    
      //   </div>`;
    
    }

      // try{
      //   const response = await fetch(baseURL)

      //   if(!response.ok){
      //       throw new Error("Could not fetch resource");
      //   }

      //   const gamesList = await response.json();
      //   console.log(gamesList);
      //   for(let i = 0;i<gamesList.length;i++){
      //     gamesContainer.innerHTML += `<a href="product-list/index.html">
      //     <img src="${gamesList[i].image.url}" alt="">
      //     </a>`
      //     }
      // }
      // catch(error){
      //   console.error(error);
      // }

    
