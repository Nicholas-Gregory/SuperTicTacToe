import { useState } from 'react'
import BigGame from './BigGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BigGame 
        boardState={[
          {
            smallState: ['','','','','','','','','']
          },
          {
            smallState: ['','','','','','','','','']
          },
          {
            smallState: ['','','','','','','','','']
          },
          {
            smallState: ['','','','','','','','','']
          },
          {
            smallState: ['','','','x','','','','','']
          },
          {
            smallState: ['','','','','','','','','']
          },
          {
            smallState: ['','','','','','o','','','']
          },
          {
            smallState: ['','','','','','','','','']
          },
          {
            smallState: ['','','','','','','','','']
          }
        ]}
        squareWidth={200}
      />
    </>
  )
}

export default App
