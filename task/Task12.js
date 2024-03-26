//todo: Написать функцию анаграммы

// 'finder', 'friend' === true
// 'test', 'sets' === false
// 'abc', 'aaa' === false
// 'abb', 'aab' === false

//Первый способ
 // const checkAnagram = (firstWord, secondWord) => {
 //    firstWord = firstWord.toLowerCase().split(' ').join('')
 //    secondWord= secondWord.toLowerCase().split(' ').join('')
 //
 //     if (firstWord.length !== secondWord.length) {
 //         return false
 //     }
 //
 //         let arrayCharCounter = {}
 //         for(let char of firstWord) {
 //             arrayCharCounter[char] = (arrayCharCounter[char] || 0) + 1
 //         }
 //         console.log(arrayCharCounter)
 //         for (let char of secondWord) {
 //             if (!arrayCharCounter[char]) {
 //                 return false
 //             }
 //             arrayCharCounter[char]--
 //         }
 //         console.log(arrayCharCounter)
 //         return true
 // }
 // console.log(checkAnagram('finder','friend'))
 // console.log(checkAnagram('test','sets'))

 //Второй способ
 // const checkToSame = (first,second) =>{
 //    first = first.toLowerCase().split(' ').join('')
 //    second = second.toLowerCase().split(' ').join('')
 //     if (first.length !== second.length){
 //         return false
 //     }
 //     const charArray = Array(26).fill(0)
 //
 //     for (let i = 0; i < first.length; i++){
 //         let letter = first.charCodeAt(i) - 'a'.charCodeAt(0)
 //         charArray[letter]++
 //     }
 //
 //     for (let i = 0; i < second.length; i++){
 //         let letter = second.charCodeAt(i) - 'a'.charCodeAt(0)
 //         charArray[letter]--
 //     }
 //
 //     for (let i = 0; i < charArray.length; i++){
 //         if (charArray[i] !== 0){
 //             return false
 //         }
 //     }
 //
 //     return true
 // }
 // console.log(checkToSame('finder','friend'))
 // console.log(checkToSame('test','sets'))