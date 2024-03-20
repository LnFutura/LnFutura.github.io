//todo: Задано число. Проверить на  истинность (true или false) что
// сумма цифр данного трехзначного числа является четным числом. Числа меняются !


let userNumber = window.prompt('Введите число')
if (userNumber && !isNaN(Number(userNumber))){
let sum = 0;
userNumber = String(userNumber)
for (let i= 0; i < userNumber.length; i++){
    sum += Number(userNumber[i]);
}
sum = Number(sum)
sum = sum % 2 === 0;
console.log(sum)
}
else(
    alert('Введите число')
)
