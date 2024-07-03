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

        if (currentSquare.row + 1 < 8) {
            let checkingSquare = Square.at(currentSquare.row + 1, currentSquare.col)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        } // up
        if (currentSquare.row - 1 >= 0) {
            let checkingSquare = Square.at(currentSquare.row - 1, currentSquare.col)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        } // down
        if (currentSquare.col + 1 < 8) {
            let checkingSquare = Square.at(currentSquare.row , currentSquare.col + 1)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        } // right
        if (currentSquare.col - 1 >= 0) {
            let checkingSquare = Square.at(currentSquare.row, currentSquare.col - 1)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        } // left
        if (currentSquare.row + 1 < 8 && currentSquare.col + 1 < 8) {
            let checkingSquare = Square.at(currentSquare.row + 1, currentSquare.col + 1)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        } // top-right
        if (currentSquare.row + 1 < 8 && currentSquare.col - 1 >= 0) {
            let checkingSquare = Square.at(currentSquare.row + 1, currentSquare.col - 1)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        } // top-left
        if (currentSquare.row - 1 >= 0 && currentSquare.col + 1 < 8) {
            let checkingSquare = Square.at(currentSquare.row - 1, currentSquare.col + 1)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        } // bottom-right
        if (currentSquare.row - 1 >= 0 && currentSquare.col - 1 >= 0) {
            let checkingSquare = Square.at(currentSquare.row - 1, currentSquare.col - 1)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        } // bottom-left

        return availableMoves;
    }
}
