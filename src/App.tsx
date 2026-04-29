import { useState } from "react"

function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Hello World</p>

      <button onClick={() => setCount(count + 1)}>
        count {count}
      </button>
    </div>
  )
}

export default App
