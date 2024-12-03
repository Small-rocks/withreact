import { useState } from 'react'
import Button from './Button'
import './App.css'

function App2() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <nav>
            <div>
              <h3>4321</h3>
              <p>yaaaaaaay</p>
            </div>
          </nav>
        </header>
        <main>
          <h1>Goodbye React!</h1>
          <button><a href="index.html">H.React</a></button>
          <button><a href="https://exampleportfolioif.netlify.app/">port</a></button>
        </main>
      </div>
    </>
  )
}

export default App2
