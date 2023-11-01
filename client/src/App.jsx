import { useState } from 'react'
import SmallGame from './SmallGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SmallGame boardWidth={20} squareWidth={30} />
    </>
  )
}

export default App
