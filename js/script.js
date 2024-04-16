const baseURL = "https://v1.api.noroff.dev/gamehub/"

const getGames = document.querySelector(".games")

async function getGames(){
  
  const req = await fetch(baseURL)

  const result = await req.json()

  console.log("game object", result)

  const games = result.filter((games) => games.genre === "all")

  for(let i = 0; i < games.length; i++)

  getGames.innerHTML += `
    <a href="./inde
}
