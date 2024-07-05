import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private moveLaterally(board: Board, availableMoves: any[], direction: string){
        const currentSquare = board.findPiece(this);

        const iRow = direction == 'up' ? 1 : direction == 'down' ? -1 : 0;
        const iCol = direction == 'right' ? 1 : direction == 'left' ? -1 : 0;

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
        let availableMoves = new Array(0);

        // up
        availableMoves = this.moveLaterally(board, availableMoves, 'up');

        // down
        availableMoves = this.moveLaterally(board, availableMoves, 'down');

        // right
        availableMoves = this.moveLaterally(board, availableMoves, 'right');

        // left
        availableMoves = this.moveLaterally(board, availableMoves, 'left');

        return availableMoves;
    }
}
