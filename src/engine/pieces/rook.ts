import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this)
        let availableMoves = new Array(0)

        for (let i = currentSquare.row + 1; i < 8; i++) {
            availableMoves.push(new Square(i, currentSquare.col))
        }
        for (let i = currentSquare.row - 1; i >= 0; i--) {
            availableMoves.push(new Square(i, currentSquare.col))
        }
        for (let i = currentSquare.col + 1; i < 8; i++) {
            availableMoves.push(new Square(currentSquare.row, i))
        }
        for (let i = currentSquare.col - 1; i >= 0; i--) {
            availableMoves.push(new Square(currentSquare.row, i))
        }

        return availableMoves;
    }
}
