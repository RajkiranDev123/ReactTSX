import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'
import { CounterProvider } from './components/provider/Counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterProvider>
        <div>
          <MyButton onclick={() => alert(99)} />
          {/* <MyButton  text='hi'/> */}

        </div>
      </CounterProvider>



    </>
  )
}

export default App
