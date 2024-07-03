import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this)
        let availableMoves = new Array(0)

        if (this.player == Player.WHITE && currentSquare.row < 7) {
            let pieceInFront1w = board.getPiece(Square.at(currentSquare.row + 1,currentSquare.col));
            let pieceInFront2w = board.getPiece(Square.at(currentSquare.row + 2,currentSquare.col));
            if (pieceInFront1w == undefined) availableMoves.push(Square.at(currentSquare.row + 1, currentSquare.col))
            if (currentSquare.row == 1 && pieceInFront1w == undefined && pieceInFront2w == undefined) availableMoves.push(Square.at(currentSquare.row + 2, currentSquare.col))

            if (currentSquare.col + 1 < 8) {
                let pieceDiagonallyRight = board.getPiece(Square.at(currentSquare.row + 1,currentSquare.col + 1));
                if(pieceDiagonallyRight != undefined && pieceDiagonallyRight?.player != this.player && !(pieceDiagonallyRight instanceof King)) availableMoves.push(Square.at(currentSquare.row + 1,currentSquare.col + 1))
            }
            if (currentSquare.col - 1 >= 0) {
                let pieceDiagonallyLeft = board.getPiece(Square.at(currentSquare.row + 1,currentSquare.col - 1));
                if(pieceDiagonallyLeft != undefined && pieceDiagonallyLeft?.player != this.player && !(pieceDiagonallyLeft instanceof King)) availableMoves.push(Square.at(currentSquare.row + 1,currentSquare.col - 1))
            }
        }
        if (this.player == Player.BLACK && currentSquare.row > 0) {
            let pieceInFront1b = board.getPiece(Square.at(currentSquare.row - 1,currentSquare.col));
            let pieceInFront2b = board.getPiece(Square.at(currentSquare.row - 2,currentSquare.col));
            if (pieceInFront1b == undefined)  availableMoves.push(Square.at(currentSquare.row - 1, currentSquare.col))
            if (currentSquare.row == 6 && pieceInFront1b == undefined && pieceInFront2b == undefined) availableMoves.push(Square.at(currentSquare.row - 2, currentSquare.col))

            if (currentSquare.col + 1 < 8) {
                let pieceDiagonallyRight = board.getPiece(Square.at(currentSquare.row - 1,currentSquare.col + 1));
                if(pieceDiagonallyRight != undefined && pieceDiagonallyRight?.player != this.player && !(pieceDiagonallyRight instanceof King)) availableMoves.push(Square.at(currentSquare.row - 1,currentSquare.col + 1))
            }
            if (currentSquare.col - 1 >= 0) {
                let pieceDiagonallyLeft = board.getPiece(Square.at(currentSquare.row - 1,currentSquare.col - 1));
                if(pieceDiagonallyLeft != undefined && pieceDiagonallyLeft?.player != this.player && !(pieceDiagonallyLeft instanceof King)) availableMoves.push(Square.at(currentSquare.row - 1,currentSquare.col - 1))
            }
        }
        return availableMoves;
    }
}
