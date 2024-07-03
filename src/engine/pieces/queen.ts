import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this)
        let availableMoves = new Array(0)

        // moving laterally
        for (let i = currentSquare.row + 1; i < 8; i++) {
            let checkingSquare = Square.at(i, currentSquare.col)
            if (board.getPiece(checkingSquare) != undefined) break
            availableMoves.push(checkingSquare)
        }
        for (let i = currentSquare.row - 1; i >= 0; i--) {
            let checkingSquare = Square.at(i, currentSquare.col)
            if (board.getPiece(checkingSquare) != undefined) break
            availableMoves.push(checkingSquare)
        }
        for (let i = currentSquare.col + 1; i < 8; i++) {
            let checkingSquare = Square.at(currentSquare.row, i)
            if (board.getPiece(checkingSquare) != undefined) break
            availableMoves.push(checkingSquare)
        }
        for (let i = currentSquare.col - 1; i >= 0; i--) {
            let checkingSquare = Square.at(currentSquare.row, i)
            if (board.getPiece(checkingSquare) != undefined) break
            availableMoves.push(checkingSquare)
        }

        // moving diagonally
        // moving top-right
        let index = 1;
        for (let i = currentSquare.row + 1; i < 8; i++){
            if (currentSquare.col + index < 8) {
                let checkingSquare = Square.at(i, currentSquare.col + index)
                if (board.getPiece(checkingSquare) != undefined) break
                availableMoves.push(checkingSquare)
            }
            index++
        }

        // moving top-left
        index = 1;
        for (let i = currentSquare.row + 1; i < 8; i++){
            if (currentSquare.col - index >= 0) {
                let checkingSquare = Square.at(i, currentSquare.col - index)
                if (board.getPiece(checkingSquare) != undefined) break
                availableMoves.push(checkingSquare)
            }
            index++
        }

        // moving bottom-right
        index = 1;
        for (let i = currentSquare.row - 1; i >= 0; i--){
            if (currentSquare.col + index < 8) {
                let checkingSquare = Square.at(i, currentSquare.col + index)
                if (board.getPiece(checkingSquare) != undefined) break
                availableMoves.push(checkingSquare)
            }
            index++
        }

        // moving bottom-left
        index = 1;
        for (let i = currentSquare.row - 1; i >= 0; i--){
            if (currentSquare.col - index >= 0) {
                let checkingSquare = Square.at(i, currentSquare.col - index)
                if (board.getPiece(checkingSquare) != undefined) break
                availableMoves.push(checkingSquare)
            }
            index++
        }

        return availableMoves
    }
}
