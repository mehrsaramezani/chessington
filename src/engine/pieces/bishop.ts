import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private moveDiagonally(board: Board, availableMoves: any[], rowDirection: string, colDirection: string){
        const currentSquare = board.findPiece(this);

        const iRow = rowDirection == 'top' ? 1 : -1;
        const iCol = colDirection == 'right' ? 1 : -1;

        let newAvailableMoves = availableMoves;
        let checkingSquare = Square.at(currentSquare.row + iRow, currentSquare.col + iCol);

        while(checkingSquare.row >= 0 && checkingSquare.row < 8 && checkingSquare.col >= 0 && checkingSquare.col < 8){
            if (board.getPiece(checkingSquare) != undefined && (board.getPiece(checkingSquare)?.player == this.player || board.getPiece(checkingSquare) instanceof King)) break;
            if (board.getPiece(checkingSquare) != undefined && board.getPiece(checkingSquare)?.player != this.player) {
                newAvailableMoves.push(checkingSquare);
                break;
            }
            newAvailableMoves.push(checkingSquare);
            checkingSquare = Square.at(checkingSquare.row + iRow, checkingSquare.col + iCol);
        }

        return newAvailableMoves;
    }

    public getAvailableMoves(board: Board) {
        let availableMoves = new Array(0)

        // moving top-right
        availableMoves = this.moveDiagonally(board, availableMoves, 'top', 'right');

        // moving top-left
        availableMoves = this.moveDiagonally(board, availableMoves, 'top', 'left');


        // moving bottom-right
        availableMoves = this.moveDiagonally(board, availableMoves, 'bottom', 'right');


        // moving bottom-left
        availableMoves = this.moveDiagonally(board, availableMoves, 'bottom', 'left');


        return availableMoves;
    }
}
