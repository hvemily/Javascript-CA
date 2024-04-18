
const gamesContainer = document.getElementById("#games");

const baseURL ="https://api.noroff.dev/api/v1/gamehub/"

var gamesArray = baseURL


fetchGames();

  async function fetchGames(){

      try{
        const response = await fetch(baseURL)

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
      }
      catch(error){
        console.error(error);
      }
  }

