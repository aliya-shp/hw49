var chessboard = '';

for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {
            chessboard += 'O';
        } else {
            chessboard += 'o';
        }
    }
    chessboard += "\n";
}

console.log(chessboard);