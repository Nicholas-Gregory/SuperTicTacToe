export default function SmallGame({ boardState, squareWidth }) {
    const squareBorderStyle = "thin solid black";

    function squareState(stateString) {
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
            case 'none':
                return null;
        }
    }

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: `${squareWidth}px `.repeat(3).trim(),
            gridTemplateRows: `${squareWidth}px `.repeat(3).trim()
        }}>
            <div style={{
                width: {squareWidth},
                height: {squareWidth},
                borderRight: squareBorderStyle,
                borderBottom: squareBorderStyle
            }}>{squareState('x')}</div>
            <div style={{
                width: {squareWidth},
                height: {squareWidth},
                borderLeft: squareBorderStyle,
                borderBottom: squareBorderStyle,
                borderRight: squareBorderStyle
            }}>{squareState('o')}</div>
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