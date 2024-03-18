//Задание 1
// let result = 8;
// let multiplier = 2.5;
// result = (result * multiplier + 674)/3.3;
// console.log(result);
//
// console.log(multiplier !== '2.5')//true
//
// let cat = "Кот Василий";
// cat = cat + " " + "Лежит на печи"
// console.log(cat)
//
// let comparsion = true == 1;
// console.log(comparsion)
// //null == undefined - true
// //null === undefined - false

//Задание 2
// let password = 123532;
// let username = 'admin';
// if (password === 123532 && username ==='admin'){
//     console.log('Добро пожаловать, администратор')
// }
// else if(password === 123532 && username !== 'admin'){
//     console.log('Добро пожаловать')
// }
// else{
//     console.log('Пароль не верный, вы не авторизованы')
// }

// let score = 80;
// switch (true){
//     case (score > 60 && score <  74):
//         console.log("Удовлетворительно");
//         break;
//     case (score > 74 && score < 90):
//         console.log("Хорошо")
//         break;
//     case (score >= 90):
//         console.log("Отлично")
// }



//Task 1
//let a = 5;
//let b = 6;
//let temp = null;
//temp = a;
//a = b;
//b = temp;
// console.log(a, b)

//Task 2
// let a = 5;
// let b = 3;
// let c = 2;
//
// if(a > b){
//     let temp = a
//     a = b;
//     b = temp;
// }
// if(b > c ){
//     let temp = b;
//     b = c;
//     c = temp;
// }
// if(a > b) {
//     let temp = a
//     a = b;
//     b = temp;
// }
// console.log(a,b,c);

//Task 3
// console.log("Введите номер года")
// let userNumber = window.prompt("Введите номер года");
// if (userNumber && !isNaN(Number(userNumber))){
//     userNumber = Math.floor((userNumber / 100) + 1)
//     console.log('Номер столетия:', userNumber)
// }
// else{
//     console.log("Введите целое положительное число")
// }
//
//

//Task 4
//let x = 12349;
// let sum = 0;
// x = String(x)
// for (let i= 0; i < x.length; i++){
//     sum += Number(x[i]);
// }
// sum = Number(sum)
// sum = sum % 2 === 0;
// console.log(sum)

//Task 5

// let numberMonth = window.prompt('Введите номер месяца')
// numberMonth = Number(numberMonth)
// switch (numberMonth){
//     case 1:
//         alert('Январь');
//         break;
//     case 2:
//         alert('Февраль');
//         break;
//     case 3:
//         alert('Март');
//         break;
//     case 4:
//         alert('Апрель');
//         break;
//     case 5:
//         alert('Май');
//         break;
//     case 6:
//         alert('Июнь');
//         break;
//     case 7:
//         alert('Июль');
//         break;
//     case 8:
//         alert('Август');
//         break;
//     case 9:
//         alert('Сентябрь');
//         break;
//     case 10:
//         alert('Октябрь');
//         break;
//     case 11:
//         alert('Ноябрь');
//         break;
//     case 12:
//         alert('Декабрь');
//         break;
// }
