
const room1={
    name:'Safari View',
    rooms:30,
    costPerNightAdult:'240'
}
const room2={
    name:'Leopard Mansion',
    rooms:96,
    costPerNightAdult:'120'
}
function NationalParkHotels(data){
    this.name=data.name,
    this.rooms=data.rooms,
    this.costPerNightAdult=data.costPerNightAdult,
    this.summariseHotel=function(){
        console.log(`A one night stay at the ${this.name} for two adults and two children costs a total of ${this.costPerNightAdult}.`)
    }
}
let Safari=new NationalParkHotels(room1)
Safari.summariseHotel()
console.log(Safari)

let Leopard=new NationalParkHotels(room2)
Leopard.summariseHotel()
console.log(Leopard)
