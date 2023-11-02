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