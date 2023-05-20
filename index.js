// Require

const coffeeMenu = require("./coffee_data.js")

console.log(coffeeMenu)

// 2. Print an array of all the drinks on the menu.

function allDrinks (obj) {
    let drinkArr = []; 
    for (let i = 0; i < obj.length; i++) {
        drinkArr.push(obj[i]["name"]); 
    } return drinkArr
}
console.log(allDrinks(coffeeMenu,))

// 3. Print an array of drinks that cost 5 and under.

function underFive (obj) {
    let underFiveArr = [] ;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i]["price"] <= 5 ) {
            underFiveArr.push(obj[i]); 
        }
    } return underFiveArr
}
console.log(underFive(coffeeMenu))

// 4. Print an array of drinks that are priced at an even number.

function evenPrice (obj) {
    let evenArr = []; 
    for (let i=0; i < obj.length; i++) {
        if (obj[i]["price"] % 2 === 0) {
            evenArr.push(obj[i]);
        }
    } return evenArr
}
console.log(evenPrice(coffeeMenu))

// 5. Print the total if you were to order one of every drink.

function everyDrinkTotal (obj) {
    let totalCost = 0;
    for (let i=0; i < obj.length; i++) {
        totalCost += obj[i]["price"]; 
    } return totalCost
}
console.log(everyDrinkTotal(coffeeMenu))

// 6. Print an array with all the drinks that are seasonal.

function seasonalDrinks (obj) {
    let seasonalDrinksArr = []; 
    for (let i=0; i < obj.length; i++) {
        if (obj[i]["seasonal"] === true) {
            seasonalDrinksArr.push(obj[i]);
        }
    } return seasonalDrinksArr
}
console.log(seasonalDrinks(coffeeMenu))

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

let seasonalDrinksArr = seasonalDrinks(coffeeMenu)
console.log(seasonalDrinksArr)

function addBeans (arr) {
    let withBeansArr = []
    for (i=0; i<arr.length; i++) {
        withBeansArr.push(`${arr[i]["name"]} with imported beans`)
    } return withBeansArr
}

console.log(addBeans(seasonalDrinksArr))