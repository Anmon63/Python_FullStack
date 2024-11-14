let users = [
    {firstName:"Susan",lastName:"Steward"},
    {firstName:"Daniel",lastName:"Longbottom"},
    {firstName:"Jacob",lastName:"Black"}
]
let newUsers=users.map(function(user){
    return `${user.firstName} ${user.lastName}<br>`
}).join('')
console.log(newUsers)
document.getElementById('names').innerHTML=`${newUsers}`