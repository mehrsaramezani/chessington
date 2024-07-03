import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this)
        let availableMoves = new Array(0)

        // moving top
        if (currentSquare.col + 1 < 8 && currentSquare.row + 2 < 8) availableMoves.push(new Square(currentSquare.row + 2, currentSquare.col + 1))
        if (currentSquare.col - 1 >= 0 && currentSquare.row + 2 < 8) availableMoves.push(new Square(currentSquare.row + 2, currentSquare.col - 1))

        // moving bottom
        if (currentSquare.col + 1 < 8 && currentSquare.row - 2 >= 0) availableMoves.push(new Square(currentSquare.row - 2, currentSquare.col + 1))
        if (currentSquare.col - 1 >= 0 && currentSquare.row - 2 >= 0) availableMoves.push(new Square(currentSquare.row - 2, currentSquare.col - 1))

        // moving right
        if (currentSquare.row + 1 < 8 && currentSquare.col + 2 < 8) availableMoves.push(new Square(currentSquare.row + 1, currentSquare.col + 2))
        if (currentSquare.row - 1 >= 0 && currentSquare.col + 2 < 8) availableMoves.push(new Square(currentSquare.row - 1, currentSquare.col + 2))

        // moving left
        if (currentSquare.row + 1 < 8 && currentSquare.col - 2 >= 0) availableMoves.push(new Square(currentSquare.row + 1, currentSquare.col - 2))
        if (currentSquare.row - 1 >= 0 && currentSquare.col - 2 >= 0) availableMoves.push(new Square(currentSquare.row - 1, currentSquare.col - 2))

        return availableMoves;
    }
}
