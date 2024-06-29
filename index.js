// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(name){
    cats.shift("Milo")
}

function appendCat(name){
    return [...cats,name]
}

function prependCat(name){
    return [name,...cats]
}

function removeLastCat(){
    return cats.slice(0,cats.length -1)
}

function removeFirstCat(){
    return cats.slice(1)
}
