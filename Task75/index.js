const energyCostEuros=[140,153,164,153,128,146]
const exchangeRate=1.13

energyCostDollars=[]

energyCostDollars = energyCostEuros.map(function(price){
    return price * exchangeRate
})
console.log(energyCostDollars)