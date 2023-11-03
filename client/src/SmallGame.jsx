import { squareBorderStyleObject, squareStateMarkup } from "./utils";

export default function SmallGame({ boardState, squareWidth, transparent }) {
    const squareBorderStyle = "thin solid black";

    function cellMarkup(stateString, index) {
        return <div 
            key={index} 
            style={{
                ...squareBorderStyleObject(index, squareBorderStyle),
            }}
        >{squareStateMarkup(stateString, squareWidth, squareBorderStyle)}</div>
    }

    return (
        <div style={{
            position: 'relative',
            opacity: `${transparent ? '0.3': '1'}`
        }}>
            {boardState.row === 'tltr' &&
                <div style={{
                    position: 'absolute',
                    width: `${squareWidth * 3 * .8}px`,
                    height: '3px',
                    backgroundColor: 'black',
                    left: `${squareWidth * .2}px`,
                    top: `${squareWidth * .5}px`
                }}></div>
            }
            {boardState.row === 'tlbl' &&
                <div style={{
                    position: 'absolute',
                    width: '3px',
                    height: `${squareWidth * 3 * .8}px`,
                    backgroundColor: 'black',
                    left: `${squareWidth * .5}px`,
                    top: `${squareWidth * .2}px`
                }}></div>
            }
            {boardState.row === 'tlbr' &&
                <div style={{
                    position: 'absolute',
                    width: `${Math.sqrt(Math.pow(squareWidth * 3, 2) + Math.pow(squareWidth * 3, 2)) * .7}px`,
                    height: '3px',
                    backgroundColor: 'black',
                    top: `${squareWidth * 3 / 2}px`,
                    transform: 'rotate(45deg)'
                }}></div>
            }
            {boardState.row === 'lmrm' &&
                <div style={{
                    position: 'absolute',
                    width: `${squareWidth * 3 * .8}px`,
                    height: '3px',
                    backgroundColor: 'black',
                    top: `${squareWidth * 3 / 2}px`,
                    left: `${squareWidth * .2}px`
                }}></div>
            }
            {boardState.row === 'trbl' &&
                <div style={{
                    position: 'absolute',
                    width: `${Math.sqrt(Math.pow(squareWidth * 3, 2) + Math.pow(squareWidth * 3, 2)) * .7}px`,
                    height: '3px',
                    backgroundColor: 'black',
                    top: `${squareWidth * 3 / 2}px`,
                    transform: 'rotate(-45deg)'
                }}></div>
            }
            {boardState.row === 'blbr' && 
                <div style={{
                    position: 'absolute',
                    width: `${squareWidth * 3 * .8}px`,
                    height: '3px',
                    backgroundColor: 'black',
                    bottom: `${squareWidth * .5}px`,
                    left: `${squareWidth * .2}px`
                }}></div>
            }
            {boardState.row === 'tmbm' &&
                <div style={{
                    position: 'absolute',
                    width: '3px',
                    height: `${squareWidth * 3 * .8}px`,
                    backgroundColor: 'black',
                    left: `${squareWidth * 3 / 2 - 1}px`,
                    top: `${squareWidth * .2}px`
                }}></div>
            }

            <div style={{
                display: "grid",
                gridTemplateColumns: `${squareWidth}px `.repeat(3).trim(),
                gridTemplateRows: `${squareWidth}px `.repeat(3).trim()
            }}>
                {boardState.squares.map((state, i) => cellMarkup(state, i))}
            </div>
        </div>
    )
}