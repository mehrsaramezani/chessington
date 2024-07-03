import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this)
        let availableMoves = new Array(0)

        // moving top
        if (currentSquare.col + 1 < 8 && currentSquare.row + 2 < 8) {
            let checkingSquare = Square.at(currentSquare.row + 2, currentSquare.col + 1)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)

        }
        if (currentSquare.col - 1 >= 0 && currentSquare.row + 2 < 8) {
            let checkingSquare = Square.at(currentSquare.row + 2, currentSquare.col - 1)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        }

        // moving bottom
        if (currentSquare.col + 1 < 8 && currentSquare.row - 2 >= 0) {
            let checkingSquare = Square.at(currentSquare.row - 2, currentSquare.col + 1)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        }
        if (currentSquare.col - 1 >= 0 && currentSquare.row - 2 >= 0) {
            let checkingSquare = Square.at(currentSquare.row - 2, currentSquare.col - 1)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        }

        // moving right
        if (currentSquare.row + 1 < 8 && currentSquare.col + 2 < 8) {
            let checkingSquare = Square.at(currentSquare.row + 1, currentSquare.col + 2)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        }
        if (currentSquare.row - 1 >= 0 && currentSquare.col + 2 < 8) {
            let checkingSquare = Square.at(currentSquare.row - 1, currentSquare.col + 2)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        }

        // moving left
        if (currentSquare.row + 1 < 8 && currentSquare.col - 2 >= 0) {
            let checkingSquare = Square.at(currentSquare.row + 1, currentSquare.col - 2)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        }
        if (currentSquare.row - 1 >= 0 && currentSquare.col - 2 >= 0) {
            let checkingSquare = Square.at(currentSquare.row - 1, currentSquare.col - 2)
            if (board.getPiece(checkingSquare)?.player != this.player && !(board.getPiece(checkingSquare) instanceof King)) availableMoves.push(checkingSquare)
        }

        return availableMoves;
    }
}
