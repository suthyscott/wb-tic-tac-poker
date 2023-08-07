console.log("hi")

// const board = ['','','','','','','','','']
let board = Array(9).fill(null)
// const clearButton = document.getElementById('clear-button')

// const winnerChecker = () => {
//     const lines = [
//         // Horizontal lines
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         // Vertical lines
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         // Diagonal lines
//         [0, 4, 8],
//         [2, 4, 6]
//     ]

//     let result

//     // We could use a for of loop in here because it doesn't matter if it loopes sequentially or not
//     lines.forEach(e => {
//         if (board[e[0]] === "X" && board[e[1]] === "X" && board[e[2]] === "X") {
//             result = "X"
//         } else if (
//             board[e[0]] === "O" &&
//             board[e[1]] === "O" &&
//             board[e[2]] === "O"
//         ) {
//             result = "O"
//         } else if (board.findIndex(e => e === null) === -1) {
//             console.log("hey there")
//             result = "Cat's game!"
//         }
//     })

//     return result
// }

// const play = tdId => {
//     const playerSpan = document.getElementById("player")
//     const clickedEl = document.getElementById(tdId)
//     clickedEl.innerText = playerSpan.innerText

//     board.splice(tdId, 1, playerSpan.innerText)

//     if (playerSpan.innerText === "X") {
//         playerSpan.innerText = "O"
//     } else {
//         playerSpan.innerText = "X"
//     }

//     const winner = winnerChecker()
//     if (winner === "X") {
//         alert("X wins!")
//     } else if (winner === "O") {
//         alert("O wins!")
//     } else if (winner === "Cat's game!") {
//         alert(winner)
//     }
// }

// clearButton.addEventListener('click', e => {
//     location.reload()
// })

function calculateWinner() {
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
      [2, 4, 6],
    ];
  
    // We want to use a traditional for-loop instead of a .forEach() loop so we can return
    // as soon as a winner is found.
    for (const line of lines) {
      const [a, b, c] = line;
      // If the first square is filled, and it matches the value of the second and third square,
      // then we have a winner.
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  
    // If we've searched all the lines, then the function returns undefined.
  }

function play(clickedId) {
    const playerSpan = document.querySelector('#player');
    const clickedElement = document.querySelector(`#${clickedId}`);
  
    clickedElement.innerText = playerSpan.innerText;
    board[clickedId] = playerSpan.innerText
  
    const winner = calculateWinner();
    if (winner) {
      alert(`${winner} is the winner!`);
    }
  
    const isBoardFull = board.every((square) => square !== null);
    if (isBoardFull) {
      alert(`Cat's game. There is no winner!`);
    }
  
    if (playerSpan.innerText === 'X') {
      playerSpan.innerText = 'O';
    } else {
      playerSpan.innerText = 'X';
    }
  }