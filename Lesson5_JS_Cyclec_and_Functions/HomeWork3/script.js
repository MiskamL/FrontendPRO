/* First level: 1. Перепишите if..else с использованием нескольких операторов '?'.
 Для читаемости рекомендуется разбить код на несколько строк. */


let message
let login = prompt('Login')

// if (login == 'Сотрудник') {
//   alert(message = 'Привет');
// } else if (login == 'Директор') {
//   alert(message = 'Здравствуйте');
// } else if (login == '') {
//   alert(message = 'Нет логина');
// } else {
//   alert(message = '');
// }


login == 'Директор' ? alert(message = 'Здравствуйте') :
    login == 'Сотрудник' ? alert(message = 'Привет') :
        login == '' ? alert(message = 'Нет логина') :
            alert(message = '')



/* Попросите у пользователя написать номер месяца - число от 1 до 12 и в зависимости от ответа, выведите какое время года. */

const numMonth = +prompt("Введите число от 1 до 12:\n")

switch (numMonth) {
    case 1:
        alert("Сейчас 'Зима'.")
        break
    case 2:
        alert("Сейчас 'Зима'.")
        break
    case 3:
        alert("Сейчас 'Весна'.")
        break
    case 4:
        alert("Сейчас 'Весна'.")
        break
    case 5:
        alert("Сейчас 'Весна'.")
        break
    case 6:
        alert("Сейчас 'Лето'.")
        break
    case 7:
        alert("Сейчас 'Лето'.")
        break
    case 8:
        alert("Сейчас 'Лето'.")
        break
    case 9:
        alert("Сейчас 'Осень'.")
        break
    case 10:
        alert("Сейчас 'Осень'.")
        break
    case 11:
        alert("Сейчас 'Осень'.")
        break
    case 12:
        alert("Сейчас 'Зима'.")
        break
}



/* Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7. */

for(let i = 2; i > 10; i++) {
    let num = i % 3
}


/* Напишите функцию JavaScript, которая переворачивает число. */
function reverseanumber(n) {
    // Ваш код
};
console.log(reverseanumber(258961)) // 169852