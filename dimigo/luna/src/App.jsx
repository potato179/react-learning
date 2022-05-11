import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [count, setCount] = useState(0);
    const [abc, setAbc] =  useState("Hello World!");

    const countUp = () => {
        setCount(prev => {
            return prev+1;
        });
    }

    useEffect(() => {
        toast.success(count);
    }, [count, abc]);

    const name = "꺼져!";
    const style = {
        backgroundColor: "red",
        color: "blue",
        fontSize: 24,
        padding: "1rem"
    };
    return (
        <div>
            <ToastContainer />
            <p>s.</p>
            <p style = {style}>{name}</p>
            <div className = "gray-box"></div>
            <div id = "potato">
                <div id = "children">
                    <h1>Hello</h1>
                    <h1>{count}</h1>
                    <button onClick = {countUp}>ㅎㅇ</button>
                </div>
            </div>
        </div>
    );
}

export default App
