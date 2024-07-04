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
            let pieceInFront1 = board.getPiece(Square.at(currentSquare.row + 1,currentSquare.col));
            let pieceInFront2 = board.getPiece(Square.at(currentSquare.row + 2,currentSquare.col));
            if (pieceInFront1 == undefined) availableMoves.push(Square.at(currentSquare.row + 1, currentSquare.col))
            if (currentSquare.row == 1 && pieceInFront1 == undefined && pieceInFront2 == undefined) availableMoves.push(Square.at(currentSquare.row + 2, currentSquare.col))

            if (currentSquare.col + 1 < 8) {
                let pieceDiagonallyRight = board.getPiece(Square.at(currentSquare.row + 1,currentSquare.col + 1));
                if(pieceDiagonallyRight != undefined && pieceDiagonallyRight?.player != this.player && !(pieceDiagonallyRight instanceof King)) availableMoves.push(Square.at(currentSquare.row + 1,currentSquare.col + 1))
            }
            if (currentSquare.col - 1 >= 0) {
                let pieceDiagonallyLeft = board.getPiece(Square.at(currentSquare.row + 1,currentSquare.col - 1));
                if(pieceDiagonallyLeft != undefined && pieceDiagonallyLeft?.player != this.player && !(pieceDiagonallyLeft instanceof King)) availableMoves.push(Square.at(currentSquare.row + 1,currentSquare.col - 1))
            }

            if (currentSquare.col + 1 < 8) {
                let pieceToTheRight = board.getPiece(Square.at(currentSquare.row,currentSquare.col + 1));
                if(pieceToTheRight != undefined && pieceToTheRight?.player != this.player && pieceToTheRight instanceof Pawn) {
                    let enPassantLastMove = {
                        oldSquare: Square.at(currentSquare.row + 2,currentSquare.col + 1),
                        newSquare: Square.at(currentSquare.row,currentSquare.col + 1)
                    }
                    if (board.lastMove.oldSquare?.equals(enPassantLastMove.oldSquare) && board.lastMove.newSquare?.equals(enPassantLastMove.newSquare)){
                        availableMoves.push(Square.at(currentSquare.row + 1,currentSquare.col + 1))
                    }
                }
            }
            if (currentSquare.col - 1 >= 0) {
                let pieceToTheLeft = board.getPiece(Square.at(currentSquare.row,currentSquare.col - 1));
                if(pieceToTheLeft != undefined && pieceToTheLeft?.player != this.player && pieceToTheLeft instanceof Pawn) {
                    let enPassantLastMove = {
                        oldSquare: Square.at(currentSquare.row + 2,currentSquare.col - 1),
                        newSquare: Square.at(currentSquare.row,currentSquare.col - 1)
                    }
                    if (board.lastMove.oldSquare?.equals(enPassantLastMove.oldSquare) && board.lastMove.newSquare?.equals(enPassantLastMove.newSquare)){
                        availableMoves.push(Square.at(currentSquare.row + 1,currentSquare.col - 1))
                    }
                }
            }
        }
        if (this.player == Player.BLACK && currentSquare.row > 0) {
            let pieceInFront1 = board.getPiece(Square.at(currentSquare.row - 1,currentSquare.col));
            let pieceInFront2 = board.getPiece(Square.at(currentSquare.row - 2,currentSquare.col));
            if (pieceInFront1 == undefined)  availableMoves.push(Square.at(currentSquare.row - 1, currentSquare.col))
            if (currentSquare.row == 6 && pieceInFront1 == undefined && pieceInFront2 == undefined) availableMoves.push(Square.at(currentSquare.row - 2, currentSquare.col))

            if (currentSquare.col + 1 < 8) {
                let pieceDiagonallyRight = board.getPiece(Square.at(currentSquare.row - 1,currentSquare.col + 1));
                if(pieceDiagonallyRight != undefined && pieceDiagonallyRight?.player != this.player && !(pieceDiagonallyRight instanceof King)) availableMoves.push(Square.at(currentSquare.row - 1,currentSquare.col + 1))
            }
            if (currentSquare.col - 1 >= 0) {
                let pieceDiagonallyLeft = board.getPiece(Square.at(currentSquare.row - 1,currentSquare.col - 1));
                if(pieceDiagonallyLeft != undefined && pieceDiagonallyLeft?.player != this.player && !(pieceDiagonallyLeft instanceof King)) availableMoves.push(Square.at(currentSquare.row - 1,currentSquare.col - 1))
            }

            if (currentSquare.col + 1 < 8) {
                let pieceToTheRight = board.getPiece(Square.at(currentSquare.row,currentSquare.col + 1));
                if(pieceToTheRight != undefined && pieceToTheRight?.player != this.player && pieceToTheRight instanceof Pawn) {
                    let enPassantLastMove = {
                        oldSquare: Square.at(currentSquare.row - 2,currentSquare.col + 1),
                        newSquare: Square.at(currentSquare.row,currentSquare.col + 1)
                    }
                    if (board.lastMove.oldSquare?.equals(enPassantLastMove.oldSquare) && board.lastMove.newSquare?.equals(enPassantLastMove.newSquare)){
                        availableMoves.push(Square.at(currentSquare.row - 1,currentSquare.col + 1))
                    }
                }
            }
            if (currentSquare.col - 1 >= 0) {
                let pieceToTheLeft = board.getPiece(Square.at(currentSquare.row,currentSquare.col - 1));
                if(pieceToTheLeft != undefined && pieceToTheLeft?.player != this.player && pieceToTheLeft instanceof Pawn) {
                    let enPassantLastMove = {
                        oldSquare: Square.at(currentSquare.row - 2,currentSquare.col - 1),
                        newSquare: Square.at(currentSquare.row,currentSquare.col - 1)
                    }
                    if (board.lastMove.oldSquare?.equals(enPassantLastMove.oldSquare) && board.lastMove.newSquare?.equals(enPassantLastMove.newSquare)){
                        availableMoves.push(Square.at(currentSquare.row - 1,currentSquare.col - 1))
                    }
                }              }
        }
        return availableMoves;
    }
}
