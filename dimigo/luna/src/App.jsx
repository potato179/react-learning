import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const name = "꺼져!";
    const style = {
        backgroundColor: "red",
        color: "blue",
        fontSize: 24,
        padding: "1rem"
    };
    return (
        <div>
            <p>s.</p>
            <p style = {style}>{name}</p>
            <div className = "gray-box"></div>
        </div>
    );
}

export default App
