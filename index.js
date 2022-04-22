function obectOrArray (collection) {
   return collection instanceof Array ? collection.slice() : Object.values(collection) 
}
function myEach (collection, callBackFunction) {
    const newCollection = obectOrArray(collection) 
    console.log(newCollection) 

    for (let i = 0; i < newCollection.length; i++) {
    callBackFunction(newCollection[i])
    }
    return collection  
   
}

function myMap (collection, callback) {
const array = []
const newCollection = obectOrArray(collection) 
for (let i = 0; i < newCollection.length; i++) {
    array.push(callback(newCollection[i]))
}
return array
}

function myReduce (collection, callback, acc) {
    let newCollection = obectOrArray(collection)  
    if(acc === undefined) {
    acc = newCollection[0]
    newCollection = newCollection.slice(1)
    //console.log(acc, newCollection)
    }
    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc
}
function myFind (collection, predicate) {
    let newCollection = obectOrArray(collection)
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i]))
        return newCollection[i]
    }
    return undefined
}

function myFilter (collection, predicate) {
   let array = []
    let newCollection = obectOrArray(collection)
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i]))
         array.push(newCollection[i])
    }
    console.log(array)
    return array
}

function mySize (collection) {
    let newCollection = obectOrArray(collection)
    return newCollection.length
}

function myFirst (array, n) {
let newArray = []
if (n === undefined) return array[0]
for(let i = 0; i < n; i++) {
newArray.push(array[i])
}
    return newArray
} 

function myLast (array, n) {
    let newArray = []
    if (n === undefined) return array[3]
    for(let i = n - 2; i < array.length; i++) {
    newArray.push(array[i])
    }
        return newArray
    } 
    
function myKeys (object) {
    return Object.keys(object)
}

function myValues (object) {
    return Object.values(object)
}