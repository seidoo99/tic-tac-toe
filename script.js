var board = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
]

var symbol = ["X", "O"];
var playerX;
var playerO;

var turn;

function getValue(row, column) {
    return board[row][column]
}

function setValue(row, column, value) {
    board[row][column] = value;
    console.log(board)
}
// console.log(getValue(0, 0))

// function renderBoard(board) {
//     var x = board.map(getvalue)
// }

function renderBoard(board) {
    for (var i = 0; i < board.length; i++) {
        var rowArr = [];
        for (var y = 0; y < board[i].length; y++) {
            var cell = `<div id="${i}${y}">${getValue(i, y)}</div>`
            rowArr.push(cell);
        }
        console.log(rowArr);
    }
}
console.log(renderBoard(board));
setValue(2, 2, 'Test');