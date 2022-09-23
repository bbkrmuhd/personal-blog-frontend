

export const LocalStorageService =  {
    loadJSON(key){
        key && JSON.parse(localStorage.getItem(key))
    }
    ,

    saveJSON(key, value){
    localStorage.setItem(key, JSON.stringify(value))
    }
   
}