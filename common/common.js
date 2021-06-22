let appendToLocalStorageArray = function(itemName,toAppend){
    let currentArray = []
    if(localStorage.getItem(itemName) != null){
        currentArray = JSON.parse(localStorage.getItem(itemName))
    }
    currentArray.push(toAppend)
    localStorage.setItem(itemName,JSON.stringify(currentArray))

}