//todo: В массиве размерности 10, найти минимальный и максимальный элементы, поменять их местами.

const arrayRun = (arr) => {
    let max = 0
    let min = 0
    for (let i = 1; i < arr.length; i++){
        if(arr[i] > arr[max]){
            max = i
            console.log(`'Элемент' max: ${i} значение: ${arr[i]}`)
        }
        if (arr[i] < arr[min]){
            min = i
            console.log(`Элемент min: ${i} значение ${arr[i]}`)
        }
    }
    console.log(arr)
    let temp = arr[max]
    arr[max] = arr[min]
    arr[min] = temp
    console.log(arr)

}
let array = [5,1,6,73,0,1,46,76,53,67]
arrayRun(array)
