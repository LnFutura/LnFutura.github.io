//todo: Дан номер некоторого года (положительное целое число).
// Вывести соответствующий ему номер столетия, учитывая, что,
// к примеру, началом 20 столетия был 1901 год.

console.log("Введите номер года")
let userNumber = window.prompt("Введите номер года");
if (userNumber && !isNaN(Number(userNumber))){
    userNumber = Math.floor((userNumber / 100) + 1)
    console.log('Номер столетия:', userNumber)
}
else{
    console.log("Введите целое положительное число")
}



