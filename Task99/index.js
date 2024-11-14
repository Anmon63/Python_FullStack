// function alertSpend(amount){
//     return `Warning! you just spent $ ${amount}!`
// }
const alertSpend = (amount) => {                                             ////when we have one parameter,we can remove or keep the brackerts
    return `warning!!, You just spend $ ${amount}!`
}



// const alertSpend = () => {
//     return `warning!!, You just spend $ ${amount}!`             //when we have no parameters,we must use brackets
// }
console.log(alertSpend('100'))

// const alertSpend = (name,amount) => {
//     return `warning!! ${name}, You just spend $ ${amount}!`             //when we have more than one parameter,we must use brackets
// }


// const alertSpend = (name,amount) => `warning!! ${name}, You just spend $ ${amount}!`             //when e have single line of output

// console.log(alertSpend('Damu','100'))