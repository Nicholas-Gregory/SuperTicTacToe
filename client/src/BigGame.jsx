import SmallGame from "./SmallGame";
import { squareBorderStyleObject, squareStateMarkup } from "./utils";

export default function BigGame({ boardState, squareWidth }) {
    const squareBorderStyle = "thin solid black"; 

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `${squareWidth}px `.repeat(3).trim(),
            gridTemplateRows: `${squareWidth}px `.repeat(3).trim(),
        }}>
            {boardState.map((square, index) =>
                <div style={{
                    ...squareBorderStyleObject(index, squareBorderStyle),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        width: '60%',
                        height: '60%'
                    }}>
                        <SmallGame 
                            boardState={square.smallState}
                            squareWidth={squareWidth * .2}
                            transparent={square.transparent}
                        />
                    </div>
                    {squareStateMarkup(square.occupied, squareWidth, squareBorderStyle)}
                </div>
            )}
        </div>
    );
}