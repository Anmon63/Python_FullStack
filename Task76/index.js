let users =[
    {firstName:"Susan",lastName:"Steward"},
    {firstName:"Daniel",lastName:"Longbottom"},
    {firstName:"Jacob",lastName:"Black"}
]
let newUsers=users.map(function(name){
    return `${name.firstName} ${name.lastName}`
})
console.log(newUsers)