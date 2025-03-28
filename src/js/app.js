import { Board } from "./components/board/board";
import { Cursor } from "./components/customCursor/cursor";

const board = new Board();
board.renderBoard();
const cursor = new Cursor()
cursor.renderCursor();
