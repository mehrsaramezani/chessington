import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private moveInL(board: Board, availableMoves: any[], firstDirection: string, secondDirection: string){
        const currentSquare = board.findPiece(this);

        const iRow = firstDirection == 'up' ? 2 : firstDirection == 'down' ? -2 : secondDirection == 'up' ? 1 : -1;
        const iCol = firstDirection == 'right' ? 2 : firstDirection == 'left' ? -2 : secondDirection == 'right' ? 1 : -1;

        let newAvailableMoves = availableMoves;
        let checkingSquare = Square.at(currentSquare.row + iRow, currentSquare.col + iCol);

        if (checkingSquare.row >= 0 && checkingSquare.row < 8 && checkingSquare.col >= 0 && checkingSquare.col < 8){
            if ((board.getPiece(checkingSquare) == undefined || board.getPiece(checkingSquare)?.player != this.player) && !(board.getPiece(checkingSquare) instanceof King)) {
                newAvailableMoves.push(checkingSquare);
            }
        }

        return newAvailableMoves;
    }

    public getAvailableMoves(board: Board) {
        let availableMoves = new Array(0);

        // moving up (right and left cases)
        availableMoves = this.moveInL(board, availableMoves, 'up', 'right');
        availableMoves = this.moveInL(board, availableMoves, 'up', 'left');

        // moving down (right and left cases)
        availableMoves = this.moveInL(board, availableMoves, 'down', 'right');
        availableMoves = this.moveInL(board, availableMoves, 'down', 'left');

        // moving right (up and down cases)
        availableMoves = this.moveInL(board, availableMoves, 'right', 'up');
        availableMoves = this.moveInL(board, availableMoves, 'right', 'down');

        // moving left (up and down cases)
        availableMoves = this.moveInL(board, availableMoves, 'left', 'up');
        availableMoves = this.moveInL(board, availableMoves, 'left', 'down');

        return availableMoves;
    }
}
