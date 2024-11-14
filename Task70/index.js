const favouriteFilm={
    title:"Minnal Murali",
    year:2021,
    genre:"action",
    star:"Tovino Thomas",
    director: "BasilJoseph"
}

const{title:film,year,genre,star:hero,director,heroine="Asha"}=favouriteFilm


console.log(`My favourite film is ${film} starring ${hero}.It's an ${genre} film that was directed by ${director} and released in ${year}.The heroine is ${heroine}`)

//title is named again into film

const dreamJob={
    company:"Google",
    place:"USA",
    designation:"Software Engineer"
}
const {company,place,designation}=dreamJob

console.log(`I would love to be a ${designation}, at ${company} in ${place}`)