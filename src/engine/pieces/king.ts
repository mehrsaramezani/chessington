import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this)
        let availableMoves = new Array(0)

        if (currentSquare.row + 1 < 8) availableMoves.push(new Square(currentSquare.row + 1, currentSquare.col)) // up
        if (currentSquare.row - 1 >= 0) availableMoves.push(new Square(currentSquare.row - 1, currentSquare.col)) // down
        if (currentSquare.col + 1 < 8) availableMoves.push(new Square(currentSquare.row , currentSquare.col + 1)) // right
        if (currentSquare.col - 1 >= 0) availableMoves.push(new Square(currentSquare.row, currentSquare.col - 1)) // left
        if (currentSquare.row + 1 < 8 && currentSquare.col + 1 < 8) availableMoves.push(new Square(currentSquare.row + 1, currentSquare.col + 1)) // top-right
        if (currentSquare.row + 1 < 8 && currentSquare.col - 1 >= 0) availableMoves.push(new Square(currentSquare.row + 1, currentSquare.col - 1)) // top-left
        if (currentSquare.row - 1 >= 0 && currentSquare.col + 1 < 8) availableMoves.push(new Square(currentSquare.row - 1, currentSquare.col + 1)) // bottom-right
        if (currentSquare.row - 1 >= 0 && currentSquare.col - 1 >= 0) availableMoves.push(new Square(currentSquare.row - 1, currentSquare.col - 1)) // bottom-left

        return availableMoves;
    }
}
