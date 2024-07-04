import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private moveOneSpaceInAnyDirection(board: Board, availableMoves: any[], rowDirection: string = '', colDirection: string = ''){
        const currentSquare = board.findPiece(this);

        const iRow = (rowDirection == 'up' || rowDirection == 'top') ? 1 : (rowDirection == 'down' || rowDirection == 'bottom') ? -1 : 0;
        const iCol = colDirection == 'right' ? 1 : colDirection == 'left' ? -1 : 0;

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
        let availableMoves = new Array(0)

        // up
        availableMoves = this.moveOneSpaceInAnyDirection(board, availableMoves, 'up', '')
        // down
        availableMoves = this.moveOneSpaceInAnyDirection(board, availableMoves, 'down', '')
        // right
        availableMoves = this.moveOneSpaceInAnyDirection(board, availableMoves, '', 'right')
        // left
        availableMoves = this.moveOneSpaceInAnyDirection(board, availableMoves, '', 'left')
        // top-right
        availableMoves = this.moveOneSpaceInAnyDirection(board, availableMoves, 'top', 'right')
        // top-left
        availableMoves = this.moveOneSpaceInAnyDirection(board, availableMoves, 'top', 'left')
        // bottom-right
        availableMoves = this.moveOneSpaceInAnyDirection(board, availableMoves, 'bottom', 'right')
        // bottom-left
        availableMoves = this.moveOneSpaceInAnyDirection(board, availableMoves, 'bottom', 'left')

        return availableMoves;
    }
}
