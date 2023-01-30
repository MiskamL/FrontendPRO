// document.body.innerHTML += '<p>Hello from JS</p>'

// const h1 = document.querySelector('h1')
// const uls =  document.querySelectorAll('ul')


// uls.forEach(ul => {
//     ul.innerHTML = `
//     <li>Раз</li>
//     <li>Два</li>
//     <li>Три</li>
// `
// })


// h1.textContent = 'Another text'

// const h1 = document.querySelector('h1')
// const uls =  document.querySelectorAll('ul')
// const img = document.querySelector('img')
// const a = document.querySelector('a')

// img.setAttribute('src', 'https://klike.net/uploads/posts/2019-05/1556945364_1.jpg')

// a.innerHTML = '<a href="https://www.google.com/">google</a>'

// a.setAttribute('href', 'https://www.google.com/')



// const fruits = ['Apple', 'Orange', 'Ananas']

// const ul = document.createElement('ul')

// fruits.forEach(fruits => {
//     const li = document.createElement('li')
//     li.innerText = fruits
//     ul.appendChild(li)
// })

// document.getElementById('root').appendChild(ul)


// const links = [
//     {title: 'BMW', link: 'https://ru.wikipedia.org/wiki/BMW'},
//     {title: 'Mercedes', link: 'https://ru.wikipedia.org/wiki/Mercedes-Benz'},
//     {title: 'Audi', link: 'https://ru.wikipedia.org/wiki/Audi'},
//     {title: 'Suzuki', link: 'https://ru.wikipedia.org/wiki/Suzuki'},
//     {title: 'Honda', link: 'https://ru.wikipedia.org/wiki/Honda'},
// ]

// links.forEach(link => {
//         const l = document.createElement('a')
//         l.innerHTML = ''
//         l.appendChild(link)
// })


// const ul = document.querySelector('ul')

// ul.className = 'ul'
// ul.classList.add('ul')

// ul.classList.replace

// for (let i = 0; i <= 255; i += 5 ) {
//     const div = document.createElement('div')
//     div.style.backgroundColor = `rgb(128, 128, ${i})`

//     document.getElementById('root').appendChild(div)
// }

const button = document.querySelector('button')

button.addEventListener('click', () => {
    button.style.backgroundColor = `rgb(128, 128, 100)`
})

const h1 = document.querySelector('h1')

h1.addEventListener('mouseover', () => {
    h1.style.color = `aqua`
})
h1.addEventListener('mouseduwn', () => {
    h1.style.color = `black`
})