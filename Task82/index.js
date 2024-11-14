// const arr=new Array(3)
// console.log(arr[1])
// const newArr=new Array(1,2,3)
// console.log(newArr)

// const arr=[1,2,3,4,5]
// arr.fill(0,1,3)
// console.log(arr)

// const arr=new Array(1000)

document.addEventListener('DOMContentLoaded', function () {
const newNumberArray=new Array(10).fill(20).map(function(num){
    return `<div class="box">${num}</div>`
}).join(' ')
document.getElementById('numbers').innerHTML= newNumberArray
});


