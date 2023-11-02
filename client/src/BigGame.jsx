import { squareBorderStyleObject } from "./utils";

export default function BigGame({ boardState, squareWidth }) {
    const squareBorderStyle = "thin solid black"; 

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `${squareWidth}px `.repeat(3).trim(),
            gridTemplateRows: `${squareWidth}px `.repeat(3).trim()
        }}>
            {boardState.map((square, index) =>
                <div></div>
            )}
        </div>
    );
}