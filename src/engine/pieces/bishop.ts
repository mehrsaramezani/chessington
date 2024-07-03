import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this)
        let availableMoves = new Array(0)

        // moving top-right
        let index = 1;
        for (let i = currentSquare.row + 1; i < 8; i++){
            if (currentSquare.col + index < 8) {
                let checkingSquare = Square.at(i, currentSquare.col + index)
                if (board.getPiece(checkingSquare) != undefined && (board.getPiece(checkingSquare)?.player == this.player || board.getPiece(checkingSquare) instanceof King)) break
                if (board.getPiece(checkingSquare) != undefined && board.getPiece(checkingSquare)?.player != this.player) {
                    availableMoves.push(checkingSquare)
                    break
                }
                availableMoves.push(checkingSquare)
            }
            index++
        }

        // moving top-left
        index = 1;
        for (let i = currentSquare.row + 1; i < 8; i++){
            if (currentSquare.col - index >= 0) {
                let checkingSquare = Square.at(i, currentSquare.col - index)
                if (board.getPiece(checkingSquare) != undefined && (board.getPiece(checkingSquare)?.player == this.player || board.getPiece(checkingSquare) instanceof King)) break
                if (board.getPiece(checkingSquare) != undefined && board.getPiece(checkingSquare)?.player != this.player) {
                    availableMoves.push(checkingSquare)
                    break
                }
                availableMoves.push(checkingSquare)
            }
            index++
        }

        // moving bottom-right
        index = 1;
        for (let i = currentSquare.row - 1; i >= 0; i--){
            if (currentSquare.col + index < 8) {
                let checkingSquare = Square.at(i, currentSquare.col + index)
                if (board.getPiece(checkingSquare) != undefined && (board.getPiece(checkingSquare)?.player == this.player || board.getPiece(checkingSquare) instanceof King)) break
                if (board.getPiece(checkingSquare) != undefined && board.getPiece(checkingSquare)?.player != this.player) {
                    availableMoves.push(checkingSquare)
                    break
                }
                availableMoves.push(checkingSquare)
            }
            index++
        }

        // moving bottom-left
        index = 1;
        for (let i = currentSquare.row - 1; i >= 0; i--){
            if (currentSquare.col - index >= 0) {
                let checkingSquare = Square.at(i, currentSquare.col - index)
                if (board.getPiece(checkingSquare) != undefined && (board.getPiece(checkingSquare)?.player == this.player || board.getPiece(checkingSquare) instanceof King)) break
                if (board.getPiece(checkingSquare) != undefined && board.getPiece(checkingSquare)?.player != this.player) {
                    availableMoves.push(checkingSquare)
                    break
                }
                availableMoves.push(checkingSquare)
            }
            index++
        }

        return availableMoves;
    }
}
