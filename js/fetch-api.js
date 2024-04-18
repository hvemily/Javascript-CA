const baseURL = "https://api.noroff.dev/api/v1/gamehub/"


export async function getGames(){   
   
        const req = await fetch(baseURL)

        if(req.ok){

            const result = await req.json()
            const data = {
                movies : result,
                error : false,
            }
    
            return data 
    


        }else{
            const data = {
                movies : [],
                error : true,
                msg : "Error fetching API",
                status : 404,
            }
    
            return data
    

        } 

     
   
    }