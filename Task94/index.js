// const numbers =[10,20,0,122]

// const sum=numbers.reduce(function(total,currentElement){
//     console.log('total:'+ total + 'currentElement:'+currentElement)
//     return total+currentElement
// })
// console.log(sum)


const numbers=[10,5,20,15,25];
const largestNumber=numbers.reduce(function(larger,currentNumber){
    if(larger > currentNumber){
        return larger
    }else{
        return currentNumber
    }
})
console.log(largestNumber)