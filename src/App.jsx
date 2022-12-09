import { useState } from 'react'
import muiLogo from './assets/mui.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <div>
                <a href="https://mui.com/" target="_blank">
                    <img src={muiLogo} className="logo mui" alt="MUI logo"/>
                </a>
            </div>
            <h1>Material UI Tutorial</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </div>
    )
}

export default App
