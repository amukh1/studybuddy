import "../App.css";
import react, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function Groups() {
    // let testData = [
    //     {name: "Group 1", subject: "math", level: 'algebra 2', contact: 'amukh1#9613'},
    // ]
    // fetch test data from server https://StudyBuddy.amukh1.repl.co
    let [testData, setData] = useState([]);
    useEffect(() => {
        fetch("https://StudyBuddy.amukh1.repl.co/gg")
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
    }, [])
    return (
        <div className="groups">
            <center>
                <h1>Study Groups</h1>
            </center>

            <div className="gps">
            {testData.map((group, index) => {
                    return (
                        <div className="group">
                            <div>{group.name}</div>
                            <div>{group.subject}</div>
                            <div>{group.level}</div>
                            <div>{group.contact}</div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}