// const start = Date.now()

// while (true) {
//     const current = Date.now()

//     if (current - start > 5000) {
//         break
//     }
//     console.log(current)
// }

// setTimeout(() => {
//     console.log('hello from async code')
// }, 3000)

// let count = 0

// const interval = setInterval(() => {
//     console.log(count)
//     count++
//     if (count > 10){
//         clearInterval(interval)
//     }
// }, 1000)

// let promise = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("done"), 1000)
//     // setTimeout(() => reject("error"), 1000)
//     let num = Math.random()

//     // setTimeout(() => num = Math.random(), 3000)

//     if (num > 0.5) {
//         resolve(num)
//     }else {
//         reject(num)
//     }
// })
//     .then(data => {
//         console.log(data)
// })
//     .catch(error => {
//         alert(error)
// })
//     .finally(() => {
//         alert('Done')
//     })

// setTimeout(() => console.log(promise), 3000)

// let promiseOne = new Promise((resolve, reject) => {
//     let num = Math.random()

//     if (num > 0.5) {
//         resolve(num)
//     } else {
//         reject(num)
//     }
// })
//     .then(data => {
//         setTimeout(() => console.log(data), 2000)
//     })


// let promiseTwo = new Promise((resolve, reject) => {
//     let num = Math.random()

//     if (num > 0.5) {
//         resolve(num)

//     } else {
//         reject(num)
//     }
// })
//     .then(data => {
//         setTimeout(() => console.log(data), 5000)
//     })


// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve('First promis is done'), 2000)),
//     new Promise(resolve => setTimeout(() => resolve('Second promis is done'), 5000))
//   ]).then(alert('All promis is done'))


fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(data => data.json())
    .then(result => console.log(result))
        