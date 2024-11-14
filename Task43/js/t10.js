let a = ["👨‍💻", "⛷", "🍲"]


document.getElementById("q").innerHTML = a

function b11() {
    var x = document.getElementById("a11").value
    console.log(x)
    a.push(x)
    console.log(a)
    document.getElementById("q").innerHTML = a
}
b11()

function b21() {
    var x = document.getElementById("a11").value
    a.unshift(x)
    console.log(a)
    document.getElementById("q").innerHTML = a
}
b21()

function c11() {
    var x = document.getElementById("a11").value
    a.pop()
    console.log(a)
    document.getElementById("q").innerHTML = a
}
c11()

function c21() {
    var x = document.getElementById("a11").value
    a.shift()
    console.log(a)
    document.getElementById("q").innerHTML = a
}
c21()