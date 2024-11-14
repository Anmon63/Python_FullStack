var i = 1
while (i <= 500) {
    document.write(i)
    document.write("<br>")
    i = i + 1
}

for (i = 1; i <= 100; i++) {
    document.write(i)
    document.write("<br>")
}


for (i = 100; i >= 1; i--) {
    document.write(i)
    document.write("<br>")
}


for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        document.write(i)
        document.write("<br>")
    }
}