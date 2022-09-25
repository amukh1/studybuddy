import "../App.css";
import react, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function Algebra() {
    const [eq, setEq] = useState("");
    const [sol, setSol] = useState("");
    const [ans, setAns] = useState("");
    return (
        <div className="algebra">
            <center>
                <h1>Algebra calculator</h1>
            <input type="text" value={eq} onChange={(e) => setEq(e.target.value)} placeholder="name - amukh1"/>
            <input type="text" value={sol} onChange={(e) => setSol(e.target.value)} placeholder="subject - math"/>
            <br />
            <button onClick={() => {
fetch(`https://studybuddy.amukh1.repl.co/calc?ans=${encodeURIComponent(eq)}&sol=${encodeURIComponent(sol)}`)
.then(res => res.text())
.then(data => {
    setAns(data);
})
            }}>Solve</button>

            <h1>Answer:</h1>
            <h1>{ans}</h1>
            </center>
        </div>
    )
}

// fetch("https://StudyBuddy.amukh1.repl.co/gh")
//         .then(res => res.json())
//         .then(data => {
//             setData(data);
//         })