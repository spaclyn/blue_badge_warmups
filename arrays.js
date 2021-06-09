// Day 1 Blue Badge 


// FOR LOOP CHALLENGE

//ORIG CODE
/*let foods = ["apple", "orange", "rice", "bread", "tofu"]
for (let i = 0; i > foods.length; i++){
    console.log()
}*/


//bronze
/*let foods = ["apple", "orange", "rice", "bread", "tofu"]
for (let i = foods.length - 1; i > -1; i--){
    console.log(foods[i])
}*/

//silver
/*let foods = ["apple", "orange", "rice", "bread", "tofu"]
for (let i = foods.length - 1; i > -1; i--){

    let word = foods[i]

    let first_letter = word[0].toUpperCase()
    let rest = word.slice(1)

    console.log(first_letter + rest)
}*/

//Silver with helper function
/*let foods = ["apple", "orange", "rice", "bread", "tofu"]
for (let i = foods.length - 1; i > -1; i--){

    let word = foods[i]
    let titleCaseWord = titleCase(word)

    console.log(titleCaseWord)
}

function titleCase(word){

    let first_letter = word[0].toUpperCase()
    let rest = word.slice(1)

    return first_letter + rest
}*/

//Gold with helper function
/*let foods = ["apple", "orange", "rice", "bread", "tofu"]
for (let i = foods.length - 1; i > -1; i--){
    if (i % 2 == 1){
        let word = foods[i]
        let titleCaseWord = titleCase(word)
        console.log(`Foods[${i}]:` + titleCaseWord)
    }
}


function titleCase(word){

    let first_letter = word[0].toUpperCase()
    let rest = word.slice(1)

    return first_letter + rest
}*/

// FOR OF LOOP CHALLENGE 

//orig code
let foods = ["apple", "orange", "rice", "bread", "tofu"]

let allergies = ["gluten", "soy"]

for (let food of foods){
    console.log(food, foodLength(food))
}

function foodLength(food){
    return food.length > 4
}

// ARRAY PUSH CHALLENGE 

let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
let faceCards = []
let numberedCards = []

for  (let card of cards){
    if(typeof card == "string"){
        faceCards.push(card)
    } else {
        numberedCards.push(card)
    }
}

console.log(faceCards)
console.log(numberedCards)


let anials = [
    "bat", "tiger", "yak",
    "monkey", "snake", "lizard",
    "panda", "monkey", "hyena",
]

let zooTrip = {
    seen: [],
    animalsSeen: 0
}

animals.forEach((animal) => {
        console.log(`${animal} was seen today at the zoo!`)
})

console.log(zooTrip.seen)

function seenAtTheZoo(animal) {
    zooTrip.seen.push(animal)
}