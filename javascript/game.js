//
// let counter= 0;
// function check(){
//     let answer = document.getElementById('_number')
//     if (Number(answer.value) === random){
//         counter++
//         console.log('Вы угадали')
//         console.log('Вы сделали ' + counter + ' попыток')
//
//     }
//     else{
//         counter++
//         console.log('Попробуйте еще раз')
//
//     }
// }
// function getRandomInt(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
// }
//
// let random = getRandomInt(0,100)
// console.log(random)

let obj = {}
obj.name = 'Peter'
obj.get = function get(){console.log(this.name)}
obj.set = function set(value){this.name = value}
obj.set('Амфибрахий')
console.log('obj', obj.get())
