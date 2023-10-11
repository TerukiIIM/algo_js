let student = {
    name: "Tom",
    favoriteFood: "Apple",
    city: "Paris",
}

let lengthStudent = 0
let values = Object.values(student)

values.forEach(v => {
    lengthStudent += v.length
})

if ((lengthStudent % 2) != 0) {
    console.log("impair")
} else {
    console.log("pair")
}