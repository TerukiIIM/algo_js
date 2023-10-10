let a = "Jean"
let b = "Paul"

function checkName (name1, name2) {
    if (name1 == name2) {
        console.log("same")
    } else {
        console.log("different")
    }
}

checkName(a, b)
checkName(a, a)
checkName(b, b)