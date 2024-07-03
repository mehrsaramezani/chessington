import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this)
        let availableMoves = new Array(0)
        if (this.player == Player.WHITE) {
            availableMoves.push(new Square(currentSquare.row + 1, currentSquare.col))
            if (currentSquare.row == 1) availableMoves.push(new Square(currentSquare.row + 2, currentSquare.col))
        }
        if (this.player == Player.BLACK) {
            availableMoves.push(new Square(currentSquare.row - 1, currentSquare.col))
            if (currentSquare.row == 6) availableMoves.push(new Square(currentSquare.row - 2, currentSquare.col))
        }
        return availableMoves;
    }
}
