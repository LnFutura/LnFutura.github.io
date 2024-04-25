//todo 9.1 Получите из объекта user значение id и разместите его в константу userId не используя выражение user.id.


const user = {
    id: 7,
    name: 'Bob',
    token: 12343423
}

const {id: userID} = user
console.log(userID)
console.log('\n')

//todo 9.2 Создайте новый объект на базе объекта user без свойства token через деструктуризацию объекта

let {id, name} = user
let newObj = {id , name}
console.log(newObj)
console.log('\n')

//todo 9.3 Заморозьте объект user, так чтобы в него нельзя было добавить свойства.

Object.freeze(user)
user.id = 10
user.surname = 'Johnson'
console.log(user.id)
console.log(user.surname)
console.log(user)
Object.freeze(user)
console.log('\n')

//todo 9.4 Создайте на базе объекта user новый объкт с доп. полями login и password

let extendedUser = {...user, login: 'guest', password: '123'}
console.log(extendedUser)
console.log('\n')

//todo 9.5 Добавьте к объекту user метод getId который возвращает свойство id


extendedUser.getId = function () {
    return this.id
}
console.log(`Id = ${extendedUser.getId()}`)

//todo 9.6 Добавьте к объекту user метод setId который утанавливает свойство id

extendedUser.setId = function (id){
    this.id = id
}
extendedUser.setId(5)
console.log(`Id = ${extendedUser.getId()}`)

//todo 9.7 Проитерируйте объект user так чтобы при итерации можно было получить его ключ и значение.

for (let key in extendedUser) {
    console.log(`Key: ${key} value:${extendedUser[key]}`)
}

//todo 9.8 Сериализуйте объект в json

console.log(JSON.stringify(extendedUser))

//todo 9.8 Преобразуйте объект в ассоциативный массив.

let array = Object.entries(extendedUser).map(([key, value]) => ({key : value}))
console.log(array)

let array1 = new Map(Object.entries(extendedUser))
console.log(array1)

let data = Object.entries(extendedUser)
console.log(data)