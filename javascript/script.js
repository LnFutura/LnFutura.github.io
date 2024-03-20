// let obj = {name: 'Peter', age: 23}
// let mass =[{age:100, name:'Peter'},{age: 200,name:'Tortoise'}]
// mass[1].name

function getCity(){

    let cityID = document.getElementById('city-select')
    console.log(cityID.value)
}

let data = [{id:1,name:"Санкт-Петербург"},{id:2,name:"Москва"},{id:3,name:"Сочи"}]


let str = '<select name="city" id="city-select">'
for (let item of data) {
    str += '<option value="' + item.id + '">' + item.name + '</option>'

}
str += '</select>'
let node = document.querySelector('#name')
node.innerHTML = str;



// let str = '<ul>'
// for (let item of data) {
//     console.log(str)
//     str = str + '<li>' + item + '</li>'
// }
// str += '</ul>'
// console.log(str)
// let node = document.querySelector('#name')
// node.innerHTML = str;
