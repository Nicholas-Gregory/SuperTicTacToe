import { useState } from 'react'
import BigGame from './BigGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BigGame 
        boardState={[
          {
            smallState: {
              squares: ['','','','','','','','',''],
              row: 'tltr'
            }
          },
          {
            smallState: {
              squares: ['','','','','','','','',''],
              row: 'tlbl'
            }
          },
          {
            smallState: {
              squares: ['','','','','','','','',''],
              row: 'tlbr'
            }
          },
          {
            smallState: {
              squares: ['','','','','','','','',''],
              row: 'trbl'
            }
          },
          {
            smallState: {
              squares: ['','','','x','','','','',''],
              row: 'lmrm'
            }
          },
          {
            smallState: {
              squares: ['','','','','','','','',''],
              row: 'tmbm'
            }
          },
          {
            smallState: {
              squares: ['','','','','','o','','','']
            }
          },
          {
            smallState: {
              squares: ['','','','','','','','','']
            }
          },
          {
            smallState: {
              squares: ['','','','','','','','',''],
              row: 'blbr'
            }
          }
        ]}
        squareWidth={200}
      />
    </>
  )
}

export default App
