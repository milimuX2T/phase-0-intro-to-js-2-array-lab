const cats = [
    "Milo", 
    "Otis", 
    "Garfield"
];


function destructivelyAppendCat(catname){
    cats.push(catname)
}
destructivelyAppendCat(catname)

function destructivelyPrependCat(catnames) {
    cats.unshift (catnames)
}
destructivelyPrependCat(catnames)

function destructivelyRemoveLastCat(){
    cats.pop ()
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    cats.shift()
}
destructivelyRemoveFirstCat()


function appendCat(v){
    let newcats = cats.slice()
    newcats.push (v)
    console.log(newcats)
    console.log(cats)
    return newcats
    
}
appendCat(v)

function prependCat(v){
    let newcats = cats.slice()
    newcats.unshift (v)
    console.log(newcats)
    console.log(cats)
    return newcats
}
prependCat(v)

function removeLastCat(){
    let newcats = cats.slice()
    newcats.pop()
    console.log(newcats)
    console.log(cats)
    return newcats
}
removeLastCat()

function removeFirstCat(){
    let newcats = cats.slice()
    newcats.shift()
    console.log(newcats)
    console.log(cats)
    return newcats
}
removeFirstCat()



