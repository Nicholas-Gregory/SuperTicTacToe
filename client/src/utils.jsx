export const squareBorderStyleObject = (index, squareBorderStyle) => {
    switch (index) {
        case 0:
            return {
                borderRight: squareBorderStyle,
                borderBottom: squareBorderStyle
            };
        case 1:
            return {
                borderLeft: squareBorderStyle,
                borderBottom: squareBorderStyle,
                borderRight: squareBorderStyle
            }
        case 2:
            return {
                borderLeft: squareBorderStyle,
                borderBottom: squareBorderStyle
            }
        case 3:
            return {
                borderTop: squareBorderStyle,
                borderBottom: squareBorderStyle,
                borderRight: squareBorderStyle
            }
        case 4:
            return {
                border: squareBorderStyle
            }
        case 5:
            return {
                borderLeft: squareBorderStyle,
                borderTop: squareBorderStyle,
                borderBottom: squareBorderStyle
            }
        case 6:
            return {
                borderTop: squareBorderStyle,
                borderRight: squareBorderStyle
            }
        case 7:
            return {
                borderLeft: squareBorderStyle,
                borderTop: squareBorderStyle,
                borderRight: squareBorderStyle
            }
        case 8:
            return {
                borderLeft: squareBorderStyle,
                borderTop: squareBorderStyle
            }
    }
};

export function squareStateMarkup(stateString, squareWidth, squareBorderStyle) {
    switch (stateString) {
        case 'x':
            return (
                <div style={{
                    width: squareWidth,
                    height: squareWidth,
                    display: 'grid',
                    gridTemplateColumns: `${squareWidth / 2}px `.repeat(2).trim(),
                    gridTemplateRows: `${squareWidth / 2}px `.repeat(2).trim(),
                    transform: 'rotate(45deg)',
                    position: 'absolute'
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
                    borderRadius: "50%",
                    position: 'absolute'
                }}></div>
            )
        default:
            return null;
    }
}