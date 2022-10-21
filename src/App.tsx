import { useState } from 'react'
import { WelcomePage } from './components/welcome-page/WelcomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <WelcomePage/>
    </div>
  )
}

export default App
