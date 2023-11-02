import { squareBorderStyleObject } from "./utils";

export default function BigGame({ boardState, squareWidth }) {

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `${squareWidth}px `.repeat(3).trim(),
            gridTemplateRows: `${squareWidth}px `.repeat(3).trim()
        }}>

        </div>
    );
}