export function getfromStorage(key) {
    const savedInStorage = localStorage.getItem(key)

    if(!savedInStorage){
      return []
    }
  
    return JSON.parse(savedInStorage);
  }