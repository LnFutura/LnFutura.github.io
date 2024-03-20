
let x = 3;
console.log('stage 1')
let str = 'Hello';
console.log('stage 2')
let flag = true;
console.log('stage 3')//console.log используется как отладка так как программа работает сверху вниз при появлениии ошибки скрипт вылетит
const Pi = 3.14;
console.log(typeof(x));
//Нотации
// camelCase
// PascalCase
//kebab-case
//unde_score

// if(age < 18) {
//     alert('go away')
// }
// else if (18 > age < 50){
//     alert('n')
// }
// else{
//     alert('ok')
// }

// let age = 40;
// let result = (age >= 50)  ? 'y' : 'no' //Тернарный оператор после ? true потом false
// console.log(result)
// let el = document.getElementById('main');
// let data = '<H1>Hello</H1>';
// el.innerHTML = data;


// console.log(Number('5' + Number(true)))
//
// let flag = 0;
// if(flag){
//     console.log('fwsw')
// }



// let loginFrom = '';
// let login = loginFrom || 'admin'

function checkLogin(){
    let login = document.getElementById('login')
    let password = document.getElementById('password')

    console.log('login', Boolean(login.value))
    console.log('password', Boolean(password.value))
    if (login.value && password.value){
        alert('Форма валидна')
    }
    else {
        alert('Форма не валидна')
    }
}