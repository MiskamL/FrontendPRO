// Number
const num = 42
console.log(typeof num, num)

// String

const str = 'Hello World'
console.log(typeof str, str)

// Boolean 
const isAdult = true // false 
console.log(typeof isAdult, isAdult)

// Null
const variable = null
console.log(typeof variable, variable)

// Undefined
const und = undefined
console.log(typeof und, und)

// Object
const obj = {
    a: 1,
    b: 'hello',
}
console.log(typeof obj, obj)

//array
const fruits = ['Apple', 'Peach', 'Banana']

console.log(typeof fruits, fruits)

// Booleans
const x = '42'
const y = 42
console.log(x === y)
// ==, !=, !==, ===

// 0, '', null, undefined, false - false
//

const answer = +prompt("How old are you%")
if (answer < 18) {
    alert("Hi))")
} else if (35 > answer && answer > 18) {
    alert("You'r welcome.")
} else {
    alert("Good day!")
}

answer > 18 ? alert("Welcome") : alert("See you soon")

const name = prompt("Какое официальное название JavaScript?")
if (name == "ECMAScript") {
    alert("Верно!")
} else {
    alert("Не знаете? 'ECMAScript'!")
}

const numbs = +prompt("Введите любое целое число.")
if (numbs > 0) {
    alert(1)
} else if (numbs < 0) {
    alert(-1)
} else {
    alert(0)
}