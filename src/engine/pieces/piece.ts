import Player from '../player';
import Board from '../board';
import Square from '../square';
import Pawn from "./pawn";

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);

        // for En Passant, to assure the opposing pawn is taken
        if (this instanceof Pawn && currentSquare.col !== newSquare.col && board.getPiece(newSquare) === undefined) {
            board.setLastMove(this, currentSquare, newSquare, true);
            const squareOfTakenPawn = Square.at(currentSquare.row, newSquare.col);
            board.setPiece(squareOfTakenPawn, undefined);
        } else {
            board.setLastMove(this, currentSquare, newSquare, false);
        }

        board.movePiece(currentSquare, newSquare);
    }
}
