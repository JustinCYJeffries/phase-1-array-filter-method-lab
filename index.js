// Code your solution here
function findMatching(drivers, string){
let match = drivers.filter(obj => obj === string || obj === string.toLowerCase())
return match
}

function fuzzyMatch(drivers, string){
    let letter = drivers.filter(driver => driver.slice(0, string.length) === string)
    return letter
}

function matchName(drivers, string){
    let match = drivers.filter(obj => obj.name === string)
    return match
}