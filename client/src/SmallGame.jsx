import { squareBorderStyleObject } from "./utils";

export default function SmallGame({ boardState, squareWidth }) {
    const squareBorderStyle = "thin solid black";

    function squareStateMarkup(stateString) {
        switch (stateString) {
            case 'x':
                return (
                    <div style={{
                        width: squareWidth,
                        height: squareWidth,
                        display: 'grid',
                        gridTemplateColumns: `${squareWidth / 2}px `.repeat(2).trim(),
                        gridTemplateRows: `${squareWidth / 2}px `.repeat(2).trim(),
                        transform: 'rotate(45deg)'
                    }}>
                        <div style={{
                            borderRight: squareBorderStyle,
                            borderBottom: squareBorderStyle
                        }}></div>
                        <div style={{
                            borderLeft: squareBorderStyle,
                            borderBottom: squareBorderStyle
                        }}></div>
                        <div style={{
                            borderTop: squareBorderStyle,
                            borderRight: squareBorderStyle
                        }}></div>
                        <div style={{
                            borderLeft: squareBorderStyle,
                            borderTop: squareBorderStyle
                        }}></div>
                    </div>
                );
            case 'o':
                return (
                    <div style={{
                        width: squareWidth * .8,
                        height: squareWidth * .8,
                        border: "2px solid black",
                        borderRadius: "50%"
                    }}></div>
                )
            default:
                return null;
        }
    }

    function cellMarkup(stateString, index) {
        return <div key={index} style={squareBorderStyleObject(index, squareBorderStyle)}>{squareStateMarkup(stateString)}</div>
    }

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: `${squareWidth}px `.repeat(3).trim(),
            gridTemplateRows: `${squareWidth}px `.repeat(3).trim()
        }}>
            {boardState.map((state, i) => cellMarkup(state, i))}
        </div>
    )
}