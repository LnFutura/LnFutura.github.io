function createChessBoard(){
    let board = []
    let letters = ['A', 'B', 'C', 'D ', 'E ', 'F ', 'G ', 'H ']
    for (let i = 0; i < 8; i++){
        board[i] = []
            for (let j = 0; j < 8; j++) {
                board[i][j] = '//'
            }
    }
    for (let i= 0; i < 8; i++)
    {
        board[i].unshift(8 - i);

    }
    board.push(['#'].concat(letters));

        return board
}
function checkChessBoard(){
    for (let i = 0; i < 9; i++){
        console.log(chessBoard[i])
    }
}
let chessBoard = createChessBoard()
//First row
chessBoard[0][1] = 'BR'//Black rook
chessBoard[0][3] = 'BB'//Black bishop
chessBoard[0][4] = 'BQ'//Black queen
chessBoard[0][8] = 'BR'////Black rook
//Second row
chessBoard[1][1] = 'BP'//Black pawn
chessBoard[1][4] = 'BP'//Black pawn
chessBoard[1][5] = 'WB'//White bishop
chessBoard[1][6] = 'BP'//Black pawn
chessBoard[1][7] = 'WK'//White knight
chessBoard[1][8] = 'BP'//Black pawn
//Third row
chessBoard[2][1] = 'BK'//Black knight
chessBoard[2][6] = 'BK'//Black knight
//Fourth row
chessBoard[3][2] = 'BP'//Black pawn
chessBoard[3][4] = 'WK'//White knight
chessBoard[3][5] = 'WP'//White pawn
chessBoard[3][8] = 'WP'//White pawn
//Fifth row
chessBoard[4][7] = 'WP'//White pawn
//Sixth row
chessBoard[5][4] = 'WP'//White pawn
//Seventh row
chessBoard[6][1] = 'WP'//White pawn
chessBoard[6][3] = 'WP'//White pawn
chessBoard[6][5] = 'WQ'//White queen
//Eighth row
chessBoard[7][1] = 'BK'//Black king
chessBoard[7][7] = 'BB'//Black bishop
checkChessBoard()
