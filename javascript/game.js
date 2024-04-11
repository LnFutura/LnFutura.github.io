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

// let obj = {}
// obj.name = 'Peter'
// obj.get = function get(){console.log(this.name)}
// obj.set = function set(value){this.name = value}
// obj.set('Амфибрахий')
// console.log('obj', obj.get())









// let grid = [
//     { id: '28.03.2024' , event: [{ id:1 ,time: '10.00', name:'Завтрак'} , {id:2, time: '10.00', name: 'Уборка'}, {id:3, time: '14.00', name: 'Обед'}]},
//     { id: '29.03.2024' , event: [{ id:1 ,time: '10.00', name:'Завтрак'} , {id:2, time: '10.00', name: 'Уборка'}, {id:3, time: '14.00', name: 'Обед'}]},
//     { id: '30.03.2024' , event: [{ id:1 ,time: '10.00', name:'Завтрак'} , {id:2, time: '10.00', name: 'Уборка'}, {id:3, time: '14.00', name: 'Обед'}]},
//     { id: '31.03.2024' , event: [{ id:1 ,time: '10.00', name:'Завтрак'} , {id:2, time: '10.00', name: 'Уборка'}, {id:3, time: '14.00', name: 'Обед'}]}
// ]
function  render(data){
    data.forEach(
        element => {
            let node = createField(element.id)
            addCssField(node)
            root.appendChild(node)
            createChildNode(node, element.event)
        }
    )
}


function createChildNode(parent,  childAction){
    if(childAction.length === 0) return
    childAction.forEach((el) => {
        let elm = document.createElement('div')
        elm.setAttribute('data-id' ,el.id )
        let textNode = document.createTextNode(el.time + ": " + el.name)
        elm.appendChild(textNode)
        parent.appendChild(elm)
    })
}
function createField(currentDate ='26.03.2024'){
    let elm = document.createElement('div')
    elm.setAttribute('data-id' ,currentDate )
    let textNode = document.createTextNode(currentDate)
    elm.appendChild(textNode)
    return elm
}
function addCssField(elm){
    elm.classList.add('bg-gray-500')
    // elm.classList.add('h-12')
    elm.classList.add('w-32')
    elm.classList.add('p-2')
    elm.classList.add('ml-3')
    elm.classList.add('text-white')
    elm.classList.add('text-center')
}
function callback(event){
    event.stopPropagation()
    let time = prompt('Введите событие:')
    // let child = createField(time + `${new Date()}`)
    let child = createField(time)
    child.addEventListener('click', (event) => {event.target.remove()})
    event.target.appendChild(child)
    console.log(event)
}
const root  = document.querySelector('#field')
root.addEventListener('click', callback)
//render(grid)

let el = document.querySelector('#info')
// fetch('/server/modal.html', {
//     method: 'GET', // Здесь так же могут быть GET, PUT, DELETE
//     headers: {
//         // Добавляем необходимые заголовки
//         'Content-type': 'text/html; charset=UTF-8',
//     },
// }).then((response) => response.text ())
//     .then((data) => {
//         console.log(data)
//         el.innerHTML = data
//
//     })

async function getData()
{
    let response = await fetch('/server/data.json')
    let grid = await response.json()
    render(grid)
    // el.innerHTML = data.name
}
getData()