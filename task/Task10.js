//todo:  Задан произвольный url необходимо получить его домен.


//Первый способ
// const checkDomain = (url) => {
//     let singleSlash = url.indexOf("/", url.indexOf("//") + 2)
//     return url.slice(url.indexOf("//") + 2, singleSlash)
// }
// console.log(checkDomain('http://www.ozon.ru/context/detail/id/19677670/'))
// console.log(checkDomain('https://doka.guide/html/label/'))
// console.log(checkDomain('https://learn.javascript.ru/string'))

//Второй способ
// const checkLink = (url) => {
//     let link = new URL(url)
//     return link.hostname
// }
// console.log(checkLink('http://www.ozon.ru/context/detail/id/19677670/\''))