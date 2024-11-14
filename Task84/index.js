let person ={
    firstName:"Alisha",
    lastName:"Ann"
}
let person2={
    firstName:"Kerala",
    lastName:"Blasters"
}
function Person(firstName,lastName){
    this.firstName=firstName,
    this.lastName=lastName,
    this.displayName=function(){
        return `${this.firstName}${this.lastName}`
    }
}
let person1=new Person('sam','christy')
console.log(person1.displayName())
let person3=new Person('Bangalore','FC')
let person4=new Person('David','Beckham')
console.log(person1)
console.log(person3)
console.log(person4)