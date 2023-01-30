// let fruits = ["Яблоко", "Апельсин", "Слива", "Апельсин"]

// fruits.splice(1, 1)

// console.log(fruits)

// const result = fruits.find((item) => {
//     return item[0] === "Яблоко"
// })

// console.log(result)

// const filteredFruits =  fruits.filter((fruit) => {
//     return fruit[0] === "А"
// })

// console.log(filteredFruits)

// const people = [
//     { id: 1, name: "Polina", job: "Front-End" },
//     { id: 2, name: "Zhamilia", job: "Front-End" },
//     { id: 3, name: "Vyacheslav", job: "PM" },
//     { id: 4, name: "Daria", job: "Front-End" },

// ]
// const p = people.filter((person) => {
//     return people.job === "Front-End"
// })
// console.log(p)

// const res = people.filter((person) => {
//     return person.id !==2
// })

// console.log(res, 'id')

// const numbers = [63, 2, 9, 3, 6, 16, 27, 57, 42, 98]

// const result = numbers.map(num => num ** 2).sort((a, b) => b - a).filter(num => num % 2 === 0)

// console.log(result)

// const fruits = ["Яблоко", "Апельсин", "Слива", "Апельсин"]

// const obj = {}

// console.log(typeof fruits)
// console.log(typeof obj)

// if (Array.isArray(fruits)) {
//     console.log('Fruits is an array.')
// }

// const arr = ["Есть", "жизнь", "на", "Марсе"]

// const arrLenght = arr.map(i => i.length)

// console.log(arrLenght)

const arr = [1, 2, 3, 0, 4, 5, 6]

function getSums(arr) {
    const result = []

    arr.reduce((acc, item) => {
        if (item !== 0) {
            const pair = acc + item
            result.push(pair)
            return pair
        }

    }, 0)
    return result
}

console.log(getSums(arr))