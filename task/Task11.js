//todo: Задан произвольный url необходимо получить router, action и id

const urlSplit = (url, choice) => {
    let str  = url.split('/').filter(Boolean)
    console.log(str)
    switch (choice) {
        case 'router':
            return str[2]
        case 'action':
            return str[3]
        case 'id':
            return str[5]
        default:
            break;
    }
}
console.log(urlSplit('http://www.ozon.ru/context/detail/id/19677670/', 'router'))
console.log(urlSplit('http://www.ozon.ru/context/detail/id/19677670/', 'action'))
console.log(urlSplit('http://www.ozon.ru/context/detail/id/19677670/','id'))

