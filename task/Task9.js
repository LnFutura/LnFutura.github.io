//todo: Определить, является ли строка полиндромом. Палиндром - это число или слова, читающиеся одинаково в обоих направлениях.


//Первый способ
// const stringSame = (str) => {
//     str = String(str).toLowerCase().split(" ").join("")
//     for (let i = 0; i < str.length / 2; i++){
//         if (str[i] !== str[str.length - i - 1]){
//             return false
//         }
//     }
//     return true
// }

//Второй способ
const subStringSplit = (str) => {
    str = String(str).toLowerCase().split(" ").join("")
    let first = str.substring(0,Math.floor(str.length / 2 ))
    let second = str.substring(Math.ceil(str.length / 2))
    second = second.split(" ").reverse().join("")
    return first === second
}


const userString = () => {
    const userInput = document.querySelector("input[name = 'result']")
    if(userInput.value) {
        console.log(subStringSplit(userInput.value))
    }
    else{
        console.log('Введите строку')
    }
}


