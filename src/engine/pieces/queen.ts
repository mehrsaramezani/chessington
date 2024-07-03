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

        // moving diagonally
        // moving top-right
        let index = 1;
        for (let i = currentSquare.row + 1; i < 8; i++){
            if (currentSquare.col + index < 8) availableMoves.push(new Square(i, currentSquare.col + index))
            index++
        }

        // moving top-left
        index = 1;
        for (let i = currentSquare.row + 1; i < 8; i++){
            if (currentSquare.col - index >= 0) availableMoves.push(new Square(i, currentSquare.col - index))
            index++
        }

        // moving bottom-right
        index = 1;
        for (let i = currentSquare.row - 1; i >= 0; i--){
            if (currentSquare.col + index < 8) availableMoves.push(new Square(i, currentSquare.col + index))
            index++
        }

        // moving bottom-left
        index = 1;
        for (let i = currentSquare.row - 1; i >= 0; i--){
            if (currentSquare.col - index >= 0) availableMoves.push(new Square(i, currentSquare.col - index))
            index++
        }

        return availableMoves
    }
}
