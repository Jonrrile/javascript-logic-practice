const piggyBank = {
    quarters: 17,
    nickels: 29,
    dimes: 33,
    pennies: 328
}

let dollarAmount = piggyBank["quarters"] / 4 + piggyBank["nickels"] / 20 
+ piggyBank["dimes"] / 10 + piggyBank["pennies"] / 100

console.log(dollarAmount);