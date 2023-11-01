export default function SmallGame({ boardState,  boardWidth, squareWidth }) {
    const squareBorderStyle = "thin solid black";

    return (
        <div style={{
            display: "grid",
            width: {boardWidth},
            height: {boardWidth},
            gridTemplateColumns: `${squareWidth}px `.repeat(3).trim(),
            gridTemplateRows: `${squareWidth}px `.repeat(3).trim()
        }}>
            <div style={{
                width: {squareWidth},
                height: {squareWidth},
                borderRight: squareBorderStyle,
                borderBottom: squareBorderStyle
            }}></div>
            <div style={{
                width: {squareWidth},
                height: {squareWidth},
                borderLeft: squareBorderStyle,
                borderBottom: squareBorderStyle,
                borderRight: squareBorderStyle
            }}></div>
            <div style={{
                width: {squareWidth},
                height: {squareWidth},
                borderLeft: squareBorderStyle,
                borderBottom: squareBorderStyle
            }}></div>

            <div style={{
                width: {squareWidth},
                height: {squareWidth},
                borderTop: squareBorderStyle,
                borderBottom: squareBorderStyle,
                borderRight: squareBorderStyle
            }}></div>
            <div style={{
                width: {squareWidth},
                height: {squareWidth},
                border: squareBorderStyle
            }}></div>
            <div style={{
                width: {squareWidth},
                height: {squareWidth},
                borderLeft: squareBorderStyle,
                borderTop: squareBorderStyle,
                borderBottom: squareBorderStyle
            }}></div>

            <div style={{
                width: {squareWidth},
                height: {squareWidth},
                borderTop: squareBorderStyle,
                borderRight: squareBorderStyle
            }}></div>
            <div style={{
                width: {squareWidth},
                height: {squareWidth},
                borderLeft: squareBorderStyle,
                borderTop: squareBorderStyle,
                borderRight: squareBorderStyle
            }}></div>
            <div style={{
                width: {squareWidth},
                height: {squareWidth},
                borderLeft: squareBorderStyle,
                borderTop: squareBorderStyle
            }}></div>
        </div>
    )
}