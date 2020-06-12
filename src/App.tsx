import React, { useState, useCallback } from 'react'
import TestComp from './components/TestComp'
import TestComp2 from './components/TestComp2'
import TestComp3 from './components/TestComp3'
import Test5 from './components/Test5'
import './App.css'

function App() {
  const [status, setStatus] = useState(false)
  const [count, setCount] = useState(0)
  const [domNode, setDomNode] = useState(null as any)
  const [user, setUser] = useState({ name: 'zhou' })
  const onClick = useCallback(() => {
    setStatus((status) => !status)
  }, [])
  console.log('user', user)
  return (
    <div className="App">
      <header>
        <h1>antd@4.x form</h1>
      </header>
      <div>
        <button onClick={onClick}>toggle</button>
        <button onClick={() => setCount(count + 1)}>count</button>
        <div>{count}</div>
      </div>
      <div>
        <div>header</div>
        <div>{status ? <TestComp2></TestComp2> : <TestComp domNode={domNode}>123</TestComp>}</div>
      </div>
      <div>
        <div>异地挂载</div>
        <div
          ref={(node) => {
            console.log('1233')
            setDomNode(node)
          }}
        ></div>
      </div>
      <Test5></Test5>
    </div>
  )
}

export default App
