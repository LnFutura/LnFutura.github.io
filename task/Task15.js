// Cгенерировать массив 6(строк) на 7(колонок),  который должнем быть заполнен днями в текущем месяце (календарь на месяц).
// Месяц задается произвольно. Календарь должен включать дни недели предыдущего месяца и последующего.
// В решении задачи воспользоваться стандартными функциями работы с датой и временем.


//Первый способ
// function createCalendar(){
//     let currentDate = new Date()
//     currentDate.setFullYear(2024, 2, 1);
//     currentDate.setDate(1)
//     let firstDayOfMonth = currentDate.getDay()//Значение первого дня месяца
//     console.log(currentDate)
//     console.log(firstDayOfMonth)
//     let arrayOfDate = []
//     for (let i = 0; i < 6; i++)
//     {
//         arrayOfDate[i] = []
//         for (let j = 0; j < 7; j++){
//             if (i === 0 && j < firstDayOfMonth - 1){
//                 let lastDayOfPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()
//                 arrayOfDate[i][j] = lastDayOfPreviousMonth - (firstDayOfMonth - j) + 2
//             }
//             else if(firstDayOfMonth === 0 && i === 0 && j < 6){
//                 let lastDayOfPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()
//                 arrayOfDate[i][j] = lastDayOfPreviousMonth - (6 - j) + 1
//             }
//             else{
//                 arrayOfDate[i][j] = currentDate.getDate()
//                 currentDate.setDate(currentDate.getDate() + 1)
//             }
//         }
//     }
//     return arrayOfDate
// }
// console.log(createCalendar())


//Второй способ
function createArray(){
    let currentDate = new Date()
    currentDate.setDate(1)
    let firstDayOfMonth = currentDate.getDay()
    let numberOfPreviousMonthDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1
    let arrayOfDate = []

    let previousMonthLastDay = new Date(currentDate.getFullYear(),currentDate.getMonth(),0).getDate()
    let arrayOfPreviousMonthDays = []
    for (let i = 0; i < numberOfPreviousMonthDays; i++){
        arrayOfPreviousMonthDays.unshift(previousMonthLastDay - i)
    }

    for (let i = 0; i < 6; i++){
        arrayOfDate[i] = []
        for (let j = 0; j < 7; j++){
            if (i === 0 && j < numberOfPreviousMonthDays) {
                arrayOfDate[i][j] = arrayOfPreviousMonthDays[j]
            }
            else{
                arrayOfDate[i][j] = currentDate.getDate()
                currentDate.setDate(currentDate.getDate() + 1)
            }
        }

    }
    return arrayOfDate
}
console.log(createArray())