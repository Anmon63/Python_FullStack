function abc() {
    let sentence = ["Hello", "my", "name", "is", "Alisha"]
    let greet = " "

    for (i = 0; i < sentence.length; i++) {
        greet += sentence[i] + " "

    }
    console.log(greet)
    let a = document.getElementById("h")
    console.log(a)
    document.getElementById("h").innerHTML = greet
}