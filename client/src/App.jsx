import { useState } from 'react'
import SmallGame from './SmallGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SmallGame boardState={[
        'x',
        'o',
        '',
        '',
        'x',
        'o',
        'o',
        '',
        'x'
      ]} squareWidth={30} />
    </>
  )
}

export default App
