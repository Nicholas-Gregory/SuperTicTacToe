import { useState } from 'react'
import BigGame from './BigGame'

function App() {
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
            },
            occupied: 'x',
            transparent: true
          },
          {
            smallState: {
              squares: ['','','','','','','','',''],
              row: 'blbr'
            },
            occupied: 'o',
            transparent: true
          }
        ]}
        squareWidth={200}
      />
    </>
  )
}

export default App
