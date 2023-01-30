// let roma = {
//     name: "Рома",
//     sayHi: function() { 
//         alert("Привет дружище!!!")

//     }
// }
// console.log(roma.name)

// roma.sayHi()

// let str = 'Привет'

// alert(str.toUpperCase())

// console.log(Math.pow(5, 2))

// console.log(Math.random())

// function readNumber() {
//     let num

//     do {
//         num = prompt('Enter the number')

//     } while (isNaN(num))

//     if (num === null || ' ') {
        
//     }
    
// }
// let str = 'вася'

// function ucFirst(str) {
//     return str.slice(0,1).toUpperCese() + str.slice(1)
// }
// ucFirst(str)

// let fruits = ["Яблоко", "Апельсин", "Слива"]

// fruits[1] = "Груша"

// console.log(fruits)

// console.log(fruits.length)

// console.log(fruits[fruits.length - 1])

// fruits.length = 2

// console.log(fruits)

// console.log(fruits.join('+'))

let styles = ["Джаз", "Блюз"]

console.log(styles)
styles.push("Рок-н-рол")
console.log(styles)
styles[Math.floor((styles.length - 1) / 2)] = "Классика"
console.log(styles)
console.log(styles.shift())
styles.unshift("Рэп","вамва")
