const baseURL = "https://api.noroff.dev/api/v1/gamehub/"


export async function getGames(){   
   
    showLoader();

        const req = await fetch(baseURL)

        await delay(800);

        if(req.ok){

            const result = await req.json()
            const data = {
                games : result,
                error : false,
            }
    
            hideLoader();

            return data 
    


        }else{
            const data = {
                games : [],
                error : true,
                msg : "Error fetching API",
                status : 404,
            }
    
            hideLoader();

            return data
    

        } 

     
   
    }


 function showLoader() {
    const loader = document.querySelector(".loader");
    loader.style.display = "block";

 }   
 function hideLoader() {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";

 }   
 function delay(ms) {
    
    return new Promise(resolve => setTimeout(resolve, ms));

 }   