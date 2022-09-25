import "../App.css";
import react, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function Home() {

    let slideIn = [
        useSpring({
          from: { position: "relative", x: "-250%" },
          to: { position: "relative", x: "0%" },
          // loop: true,
          onRest: () => {
            console.log("r1");
          },
          delay: 1000
        }),
        useSpring({
          from: { position: "relative", left: "-250%" },
          to: { position: "relative", left: "0%" },
          // loop: true,
          onRest: () => {
            console.log("r");
          },
          delay: 1100
        }),
        useSpring({
          from: { position: "relative", left: "-250%" },
          to: { position: "relative", left: "0%" },
          // loop: true,
          onRest: () => {
            console.log("r");
          },
          delay: 1200
        })
      ];

  const [name, setName] = useState("");
 const [sub, setSub] = useState("");
 const [lev, setLev] = useState("");
 const [con, setCon] = useState("");

 const [dname, dsetName] = useState("");
 const [dsub, dsetSub] = useState("");
 const [dlev, dsetLev] = useState("");
 const [dcon, dsetCon] = useState("");
 const [sneak, ssneak] = useState("");

  return (
    <div className="App home wh">
      <animated.div
        className="title t"
        style={{
          ...slideIn[0]
        }}
      >
        <strong>
          <em>Home</em>
        </strong>
      </animated.div>

      <div className="ykg">
        <animated.div className="home-groups" style={{
          ...slideIn[0]
        }}>
            <h3>New group</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name - cheeses"/>
            <input type="text" value={sub} onChange={(e) => setSub(e.target.value)} placeholder="subject - math"/>
            <input type="text" value={lev} onChange={(e) => setLev(e.target.value)} placeholder="level - algebra 2"/>
            <br />
            <input type="text" value={con} onChange={(e) => setCon(e.target.value)} placeholder="contact - amukh1#9613"/>

            <br />

            <button className="create" onClick={
                () => {
                    fetch(`https://StudyBuddy.amukh1.repl.co/ng?name=${encodeURIComponent(name)}&subject=${encodeURIComponent(sub)}&level=${encodeURIComponent(lev)}&contact=${encodeURIComponent(con)}`)
                }}>Create</button>
        </animated.div>

        <animated.div className="home-groups" style={{
          ...slideIn[0]
        }}>
            <h3>Homework help</h3>
            <input type="text" value={dname} onChange={(e) => dsetName(e.target.value)} placeholder="name - amukh1"/>
            <input type="text" value={dsub} onChange={(e) => dsetSub(e.target.value)} placeholder="subject - math"/>
            <input type="text" value={dlev} onChange={(e) => dsetLev(e.target.value)} placeholder="level - algebra 2"/>

            <br />
            <input type="text" value={dcon} onChange={(e) => dsetCon(e.target.value)} placeholder="contact - amukh1#9613"/>
            <input type="text" value={sneak} onChange={(e) => ssneak(e.target.value)} placeholder="sneak peak - y=4x+5"/>

            <br />

            <button className="create"onClick={
                () => {
                    fetch(`https://StudyBuddy.amukh1.repl.co/nh?name=${encodeURIComponent(dname)}&subject=${encodeURIComponent(dsub)}&level=${encodeURIComponent(dlev)}&contact=${encodeURIComponent(dcon)}&sneak=${encodeURIComponent(sneak)}}`)
                }}>Create</button>
        </animated.div>
        </div>

        <animated.div className="footer">
            Mit License - 2022 Amukh1
        </animated.div>

    </div>
  );
}
