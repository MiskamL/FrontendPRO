// const form = document.querySelector('form')

// form.addEventListener('submit', (event) => {
//     event.preventDefault()

//     console.log(event.target)
// })

// const input = document.querySelector('input')

// input.onchange = (event) => {
//     if (event.target.value === 'hello') {
//         console.log(event.target.value)
//         form.submit()
//     }
// }

// form.onsubmit = (event) => {
//     event.preventDefault()

//     const obj = {}

//     for (let elements of event.target.elements) {
//         if (elements.name !== 'butonn') {
//             obj[elements.name] = elements.value
//         }
//     }

//     for (let key in obj) {
//         const div = document.createElement('div')
//         div.classList.add('block')

//         div.innerHTML = `<h2>${key}<h2> <p>${obj[key]}`

//         document.body.appendChild(div)
//     }

// }


// const form = document.querySelector('form')
// const clearStor = document.querySelector('clear')
// const removeName = document.querySelector('removeName')



// form.onsubmit = (event) => {
//     event.preventDefault()

//     for (let element of event.target.elements) {
//         if (element.name !== 'butonn') {
//             localStorage.setItem(element.name, element.value)
//         }
//     }

// }

// console.log(localStorage.getItem('surname'))

// clearStor.addEventListener('click', () => {
//     localStorage.clear()
// })

// removeName.addEventListener('click', () => {
//     localStorage.removeItem('name')
// })


const form = document.querySelector('form')
const mode = document.querySelector('mode')

mode.addEventListener('onclick', () => {
    if (localStorage.getItem('mode') !== 'lightMode') {
        localStorage.setItem('mode', 'lightMode')
    }else {
        localStorage.setItem('mode', 'darkMode')
    }
})