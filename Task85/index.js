const animal1={
    name:'Tilly',
    species:'tiger',
    weightKg:56,
    age:2
}
const animal2={
    name:'Nelly',
    species:'elephant',
    weightKg:320,
    age:16
}

function Animal(data){
    this.name=data.name,
    this.species=data.species,
    this.weightKg=data.weightKg,
    this.age=data.age,
    this.description=function(){
        console.log(`${this.name} is a ${this.species}.It is of age ${this.age} and weighs ${this.weightKg}`)
    }
}

let tiger=new Animal(animal1)
tiger.description()
console.log(tiger)

let elephant=new Animal(animal2)
elephant.description()
console.log(elephant)

