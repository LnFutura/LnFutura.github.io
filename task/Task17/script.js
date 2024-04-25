
const gameField = document.querySelector('div[name="field"]')
let counter = 0
console.log(gameField)

const words = [
    {   word: "this",
        description: "Контекст выполнения"
    }
]

let button = document.querySelector('button[name="go"]')
let buttonCheck  = document.querySelector('button[name="check"]')



button.addEventListener('click', (event) => {
    event.target.style.visibility = 'hidden'
    startGame()
})

buttonCheck.addEventListener('click', (event) => {
    let previousElement = event.target.previousElementSibling
    console.log(previousElement)
    console.log(previousElement.value)
    console.log(previousElement.value.length)
    console.log(previousElement.value.trim().length)
    if (isNaN(previousElement.value) && typeof previousElement.value == 'string' && previousElement.value.trim().length === 1){
        checkLetter(previousElement.value.trim())
    }
    else{
        console.log('Введите букву')
    }
})

function checkLetter(letter){
    let arrayIndex = []
    console.log(`Массив до выполнения: ${arrayIndex}`)
    let guess = false
    let element = words[0].word.split("")
    element.forEach((element, index) => {
        if (letter === element){
            arrayIndex.push(index)
            guess = true
        }
    })
    if (!guess){
       counter++
    }
    console.log(`counter : ${counter}`)
    console.log(words[0].word)
    console.log(`Массив после: ${arrayIndex}`)
    console.log(letter)



        if (arrayIndex.length !== 0) {
            arrayIndex.forEach((index) => {
                let node = document.querySelector('div[data-id = "' + index + '"]')
                node.innerHTML = letter
                console.log(node)
            })
        }

    result(counter,element)
}


//Фабрика

function createField(index){
    let field = document.createElement('div')
    field.setAttribute('data-id', index)
    field.classList.add('field')
    gameField.appendChild(field)

}

function startGame() {
    console.log('startGame')
    let element = words[0]
    let arrayLetter = element.word.split("")
    arrayLetter.forEach((element, index) =>{
        createField(index)
    })
    let taskNode = document.querySelector(['div[name="task"]'])
    taskNode.textContent = words[0].description


}

function result(counter, element) {
    if (counter === 10) {
        console.log('Вы проиграли');
        let container = document.querySelector('.content')
        let loseNode = document.createElement('div')
        loseNode.textContent = 'You\'re lose!'
        loseNode.classList.add('loseNode')
        container.appendChild(loseNode)
    }
    else{
       let letterNode = document.querySelectorAll('.field:not(:empty)').length
        if (letterNode === element.length){
            console.log('Win')
            let container = document.querySelector('.content')
            let winNode= document.createElement('div')
            winNode.textContent = 'You\'re win!'
            winNode.classList.add('winNode')
            container.appendChild(winNode)
        }
    }
}




