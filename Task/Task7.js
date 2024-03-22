//todo: Из предыдущего задания (task6) сгенерируйте динамически шахматное поле из массива в HTML
// и раставьте шахматы в соответсвующем порядке.

function drawChessBoard(){
    let chessBoard = document.querySelector('.container')
    let chessPieces = [
        ['BR','BK','BB','BQ','','','','BR'],
        ['BP','','','BP','WB','BP','WK','BP'],
        ['BK','','','','','BK','','',],
        ['','BP','','WK','WP','','','WP',],
        ['','','','','','','WP','',],
        ['','','','WP','','','','',],
        ['WP','','WP','','WQ','','',''],
        ['BK','','','','','','BB',''],
    ]
    let block
    let flag = true
    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            block = document.createElement('div')

            if(flag){
                // block.className ='block white'

            }
            else{
                // block.className ='block black'
            }
            let piece = document.createElement('img')

            block.textContent = chessPieces[i][j]
            chessBoard.appendChild(block)
            flag = !flag
        }
        flag = !flag
    }
}
drawChessBoard()