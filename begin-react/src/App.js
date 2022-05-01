import React from "react";
import Hello from "./hello";
import "./App.css";

function App() {
    const name = "꺼져!";
    const style = {
        backgroundColor: "red",
        color: "blue",
        fontSize: 24,
        padding: "1rem"
    };
    return (
        <div>
            {/* 주현준은 게이다 */}
            <p>안녕하세요.</p>
            <Hello></Hello>
            <Hello></Hello>
            <Hello></Hello>
            <input></input>
            <p style = {style}>{name}</p>
            <div className = "gray-box"></div>
        </div>
    );
}

export default App;
