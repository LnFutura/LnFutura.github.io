function createArray(year, month){
    let currentDate = new Date(year,month)
    currentDate.setDate(1)
    let firstDayOfMonth = currentDate.getDay()
    let numberOfPreviousMonthDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1
    let arrayOfDate = []

    let previousMonthLastDay = new Date(currentDate.getFullYear(),currentDate.getMonth(),0).getDate()
    let arrayOfPreviousMonthDays = []
    for (let i = 0; i < numberOfPreviousMonthDays; i++){
        arrayOfPreviousMonthDays.unshift(previousMonthLastDay - i)
    }
    console.log(arrayOfPreviousMonthDays)
    let currentMonth = currentDate.getMonth();
    console.log(currentMonth)
    for (let i = 0; i < 6; i++){
        arrayOfDate[i] = []
        for (let j = 0; j < 7; j++){
            if (i === 0 && j < numberOfPreviousMonthDays) {
                arrayOfDate[i][j] = {
                    day: arrayOfPreviousMonthDays[j],
                    month: 'other'
                }
            }
            else {
                if (currentDate.getMonth() !== currentMonth){
                    arrayOfDate[i][j] = {
                        day: currentDate.getDate(),
                        month: 'other'
                    }
                }
                else {
                    arrayOfDate[i][j] = {
                        day: currentDate.getDate(),
                        month: 'current'
                    }
                }
                currentDate.setDate(currentDate.getDate() + 1)

            }
        }
    }
    console.log(arrayOfDate)
    return arrayOfDate
}

function drawCalendar(year,month){
    let arrayOfDate = createArray(year,month)
    let container = document.querySelector('#container')
    let weekDays = ['Понедельник', 'Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']
    for (let i = 0; i < weekDays.length; i++){
        let day = document.createElement('div')
        day.textContent = weekDays[i]
        day.classList.add('day')
        container.appendChild(day)
    }

    for (let i = 0; i < arrayOfDate.length; i++){
        for(let j = 0; j < arrayOfDate[i].length; j++){
            let node  = document.createElement('div')
            node.textContent = arrayOfDate[i][j].day
            if (arrayOfDate[i][j].month !== 'current'){
                node.classList.add('ceilPrevMonth')
            }
            else{
                node.classList.add('cell')
            }
            container.appendChild(node)
        }
    }
    let arrayOfMonth = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
    let selectMonth = document.querySelector('select[name="month"]')
    for (let i = 0; i < arrayOfMonth.length; i++){
        let option = document.createElement('option')
        option.textContent = arrayOfMonth[i]
        option.value = String(i)
        selectMonth.appendChild(option)
        console.log(option.value)
    }

    let selectYear = document.querySelector('select[name="year"]')
    for (let i = 1980; i < 2030; i++){
        let option = document.createElement('option')
        option.textContent = String(i)
        option.value = String(i)
        selectYear.appendChild(option)
    }
}

let showDate = document.querySelector('button[name="selectMonth"]')
showDate.addEventListener('click',() =>{
    let container = document.querySelector('#container');
    container.innerHTML = '';
    let year = Number(document.querySelector('select[name="year"]').value)
    let month = Number(document.querySelector('select[name="month"]').value)
    drawCalendar(year,month)
})

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
drawCalendar(currentYear, currentMonth);