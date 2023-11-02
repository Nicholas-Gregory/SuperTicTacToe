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
        switch (index) {
            case 0:
                return (
                    <div style={{
                        borderRight: squareBorderStyle,
                        borderBottom: squareBorderStyle
                    }}>{squareStateMarkup(stateString)}</div>
                );
            case 1:
                return (
                    <div style={{
                        borderLeft: squareBorderStyle,
                        borderBottom: squareBorderStyle,
                        borderRight: squareBorderStyle
                    }}>{squareStateMarkup(stateString)}</div>
                );
            case 2:
                return (
                    <div style={{
                        borderLeft: squareBorderStyle,
                        borderBottom: squareBorderStyle
                    }}>{squareStateMarkup(stateString)}</div>
                );
            case 3:
                return (
                    <div style={{
                        borderTop: squareBorderStyle,
                        borderBottom: squareBorderStyle,
                        borderRight: squareBorderStyle
                    }}>{squareStateMarkup(stateString)}</div>
                );
            case 4:
                return (
                    <div style={{
                        border: squareBorderStyle
                    }}>{squareStateMarkup(stateString)}</div>
                );
            case 5:
                return (
                    <div style={{
                        borderLeft: squareBorderStyle,
                        borderTop: squareBorderStyle,
                        borderBottom: squareBorderStyle
                    }}>{squareStateMarkup(stateString)}</div>
                );
            case 6:
                return (
                    <div style={{
                        borderTop: squareBorderStyle,
                        borderRight: squareBorderStyle
                    }}>{squareStateMarkup(stateString)}</div>
                );
            case 7:
                return (
                    <div style={{
                        borderLeft: squareBorderStyle,
                        borderTop: squareBorderStyle,
                        borderRight: squareBorderStyle
                    }}>{squareStateMarkup(stateString)}</div>
                );
            case 8:
                return (
                    <div style={{
                        borderLeft: squareBorderStyle,
                        borderTop: squareBorderStyle
                    }}>{squareStateMarkup(stateString)}</div>
                );
            default:
                return null;
        }
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