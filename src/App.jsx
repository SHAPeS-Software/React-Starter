import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Site</h1>
      <br />
      <pre>
        <code>Count is {count}</code>
        <br />
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <br />
      </pre>
      <pre>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
      Facere suscipit eos temporibus earum minus quam voluptatibus<br />
      magnam blanditiis iste doloremque perferendis libero, nobis <br />
      voluptate omnis iure nemo! Dolore, provident aperiam?
      </pre>

      <hr />
      <br />
      <i id="copy">Copyright &copy; {(new Date()).getFullYear()} Your Name</i>
    </>
  )
}

export default App
