import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this)
        let availableMoves = new Array(0)

        for (let i = currentSquare.row + 1; i < 8; i++) {
            let checkingSquare = Square.at(i, currentSquare.col)
            if (board.getPiece(checkingSquare) != undefined && (board.getPiece(checkingSquare)?.player == this.player || board.getPiece(checkingSquare) instanceof King)) break
            if (board.getPiece(checkingSquare) != undefined && board.getPiece(checkingSquare)?.player != this.player) {
                availableMoves.push(checkingSquare)
                break
            }
            availableMoves.push(checkingSquare)
        }
        for (let i = currentSquare.row - 1; i >= 0; i--) {
            let checkingSquare = Square.at(i, currentSquare.col)
            if (board.getPiece(checkingSquare) != undefined && (board.getPiece(checkingSquare)?.player == this.player || board.getPiece(checkingSquare) instanceof King)) break
            if (board.getPiece(checkingSquare) != undefined && board.getPiece(checkingSquare)?.player != this.player) {
                availableMoves.push(checkingSquare)
                break
            }
            availableMoves.push(checkingSquare)
        }
        for (let i = currentSquare.col + 1; i < 8; i++) {
            let checkingSquare = Square.at(currentSquare.row, i)
            if (board.getPiece(checkingSquare) != undefined && (board.getPiece(checkingSquare)?.player == this.player || board.getPiece(checkingSquare) instanceof King)) break
            if (board.getPiece(checkingSquare) != undefined && board.getPiece(checkingSquare)?.player != this.player) {
                availableMoves.push(checkingSquare)
                break
            }
            availableMoves.push(checkingSquare)
        }
        for (let i = currentSquare.col - 1; i >= 0; i--) {
            let checkingSquare = Square.at(currentSquare.row, i)
            if (board.getPiece(checkingSquare) != undefined && (board.getPiece(checkingSquare)?.player == this.player || board.getPiece(checkingSquare) instanceof King)) break
            if (board.getPiece(checkingSquare) != undefined && board.getPiece(checkingSquare)?.player != this.player) {
                availableMoves.push(checkingSquare)
                break
            }
            availableMoves.push(checkingSquare)
        }

        return availableMoves;
    }
}
