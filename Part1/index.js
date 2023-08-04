console.log("hi")

// const board = ['','','','','','','','','']
const board = Array(9).fill(null)

const winnerChecker = () => {
    const lines = [
        // Horizontal lines
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical lines
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal lines
        [0, 4, 8],
        [2, 4, 6]
    ]

    // const xs = board.map((e,i) => e === )

    lines.forEach((e,i) => {
        if(board[e[0]] === 'X' && board[e[1]] === 'X' && board[e[2]] === 'X' ){
            alert('X wins')
        } else if(board[e[0]] === 'O' && board[e[1]] === 'O' && board[e[2]] === 'O' ){
            alert('O wins')
        } else if(board.length === 9 && !board.findIndex(null)){
            alert("Cat's game!")
        }
    })
}

const play = tdId => {
    const playerSpan = document.getElementById("player")
    const clickedEl = document.getElementById(tdId)
    clickedEl.innerText = playerSpan.innerText

    board.splice(tdId, 1, playerSpan.innerText)
    if (playerSpan.innerText === "X") {
        playerSpan.innerText = "O"
    } else {
        playerSpan.innerText = "X"
    }
    winnerChecker()
    console.log(board)
}
