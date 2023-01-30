// const obj = {
//     '3d': function() {},
//     '7d': 25,
//     // 'first name': 'Maksym',
// }

// const obj2 = {...obj}

// obj2.price = 25

// console.log(obj2.price)

// obj["3d"] = 10
// console.log(obj["3d"])

// delete obj("7d")

// console.log(obj)

// obj.__proto__.getNum = () => {
//     console.log(42)
// }

// obj.getNum()

// const person = {
//     name: 'John',
//     age: 25,
//     gander: 'male'
// }

// if ('name' in person) {
//     console.log(`hello ${person.name}`)
// }

// for (let key in person) {
//     console.log('hello')
// }

// let obj = {}

// function isEmply(obj) {
//     for (let key in obj){
//         return false
//     }
//     return true
// }


// const person = {
//     name: 'John',
//     age: 25,
//     gander: 'male',
//     sayHi: () => {
//         console.log(`${this.name} says hello`)
//     },
//     sayHello: function () {
//         console.log(`${this.name} says hello`)
//     },
// }

// person.sayHi()
// person.sayHello()

// const nowDate = new Date()

// console.log(nowDate.getFullYear())
// console.log(nowDate.getMonth())
// console.log(nowDate.getHours())
// console.log(nowDate.getTime())

// const nowDate = new Date(2022, 10, 33)

// console.log(nowDate)

// const now = Date.now()
// console.log(now)



// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

//     return weekdays[date.getDay()]
//   }

//   let date = new Date(2022, 11, 25)
//   alert(getWeekDay(date))

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0)
//     return date.getDate()
// }

// alert(getLastDayOfMonth(2012, 0))
// alert(getLastDayOfMonth(2012, 1))
// alert(getLastDayOfMonth(2013, 1))


// const person = {
//     name: 'John',
//     age: 25,
//     gander: 'male',
//     sayHi() {
//         console.log(`${this.name} says hello`)
//     }
// }
// const personString = JSON.stringify(person)
// console.log(personString)

// console.log(JSON.parse(personString))

// const user = {
//     name: 'Maksym',
//     age: 32,
// }

// const userString = JSON.stringify(user)
// console.log(userString)

// console.log(JSON.parse(userString))

const allPerson = JSON.stringify(["Коля", "Вася", "Петя"])
console.log(allPerson)

console.log(JSON.parse(allPerson))


