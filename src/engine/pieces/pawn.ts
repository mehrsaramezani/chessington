import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private moveInFront1or2(board: Board, availableMoves: any[], direction: string){
        const currentSquare = board.findPiece(this);

        const i1 = direction == 'up' ? 1 : -1;
        const i2 = direction == 'up' ? 2 : -2;

        let newAvailableMoves = availableMoves;

        const pieceInFront1 = board.getPiece(Square.at(currentSquare.row + i1,currentSquare.col));
        const pieceInFront2 = board.getPiece(Square.at(currentSquare.row + i2,currentSquare.col));

        // moving one space in front, avoiding the last row
        if (pieceInFront1 == undefined) {
            availableMoves.push(Square.at(currentSquare.row + i1, currentSquare.col));
        }

        // moving two spaces in front, only on the first move
        if ((direction == 'up' ? (currentSquare.row == 1) : (currentSquare.row == 6)) && pieceInFront1 == undefined && pieceInFront2 == undefined) {
            availableMoves.push(Square.at(currentSquare.row + i2, currentSquare.col))
        }

        return newAvailableMoves;
    }

    private moveDiagonallyToTake(board: Board, availableMoves: any[], rowDirection: string, colDirection: string) {
        const currentSquare = board.findPiece(this);

        const iRow = rowDirection == 'up' ? 1 : -1;
        const iCol = colDirection == 'right' ? 1 : -1;

        let newAvailableMoves = availableMoves;

        if (colDirection == 'right' ? (currentSquare.col + 1 < 8) : (currentSquare.col - 1 >= 0)) {
            const pieceDiagonally = board.getPiece(Square.at(currentSquare.row + iRow,currentSquare.col + iCol));
            if(pieceDiagonally != undefined && pieceDiagonally?.player != this.player && !(pieceDiagonally instanceof King)) {
                availableMoves.push(Square.at(currentSquare.row + iRow,currentSquare.col + iCol));
            }
        }

        return newAvailableMoves;
    }

    private moveDiagonallyForEnPassant(board: Board, availableMoves: any[], rowDirection: string, colDirection: string) {
        const currentSquare = board.findPiece(this);

        const iRow = rowDirection == 'up' ? 1 : -1;
        const iCol = colDirection == 'right' ? 1 : -1;

        let newAvailableMoves = availableMoves;

        if (colDirection == 'right' ? (currentSquare.col + 1 < 8) : (currentSquare.col - 1 >= 0)) {
            let pieceOnTheSide = board.getPiece(Square.at(currentSquare.row,currentSquare.col + iCol));
            if(pieceOnTheSide != undefined && pieceOnTheSide?.player != this.player && pieceOnTheSide instanceof Pawn) {
                let enPassantLastMove = {
                    oldSquare: Square.at(currentSquare.row + iRow * 2,currentSquare.col + iCol),
                    newSquare: Square.at(currentSquare.row,currentSquare.col + iCol)
                }
                if (board.lastMove.oldSquare?.equals(enPassantLastMove.oldSquare) && board.lastMove.newSquare?.equals(enPassantLastMove.newSquare)){
                    availableMoves.push(Square.at(currentSquare.row + iRow,currentSquare.col + iCol))
                }
            }
        }

        return newAvailableMoves;
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this)
        let availableMoves = new Array(0);

        // white pawn
        if (this.player == Player.WHITE && currentSquare.row < 7) {
            // move
            availableMoves = this.moveInFront1or2(board, availableMoves, 'up');

            // take
            availableMoves = this.moveDiagonallyToTake(board, availableMoves, 'up', 'right');
            availableMoves = this.moveDiagonallyToTake(board, availableMoves, 'up', 'left');

            // en passant
            availableMoves = this.moveDiagonallyForEnPassant(board, availableMoves, 'up', 'right');
            availableMoves = this.moveDiagonallyForEnPassant(board, availableMoves, 'up', 'left');
        }

        // black pawn
        if (this.player == Player.BLACK && currentSquare.row > 0) {
            // move
            availableMoves = this.moveInFront1or2(board, availableMoves, 'down');

            // take
            availableMoves = this.moveDiagonallyToTake(board, availableMoves, 'down', 'right');
            availableMoves = this.moveDiagonallyToTake(board, availableMoves, 'down', 'left');

            // en passant
            availableMoves = this.moveDiagonallyForEnPassant(board, availableMoves, 'down', 'right');
            availableMoves = this.moveDiagonallyForEnPassant(board, availableMoves, 'down', 'left');
        }

        return availableMoves;
    }
}
