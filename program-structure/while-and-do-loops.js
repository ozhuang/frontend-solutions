/*
 * Chess Board
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
 */

var chessBoard = {
  for(var i = 0; i<8; i++){
   for(var j = 0; j<8; j++){
    if((i+j)%2 == 0)
      "#";
    else
      " "; 
   }
    "\n";
  }
}
