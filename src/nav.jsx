import "./App.css";
import react, { useState, useEffect } from "react";
// import { browserHistory } from "react-router";
import { useSpring, animated } from "react-spring";

import Nav_Route from './components/nav/route.jsx'

export default function Nav() {
    let path = window.location.hash;
    let [current, Transition] = useState(path);
    let cd = useSpring({
        from: { position: "relative", y: "-115%" },
        to: { position: "relative", y: "-0%" },
        delay: 1000
      });
    return (
        <animated.div className="nav" style={{...cd}}>
            <div className="navHeader">
                <em>StudyBuddy</em>
            </div>
            <div className="navLinks">
                {/* <ul>
                    <li>Home</li>
                    <li>Study Groups</li>
                    <li>Homework help</li>
                    <li>Algebra Calculator</li>
                </ul> */}

<ul className="ul">

    <Nav_Route position="#/" name={"Home"} current={current} Transition={Transition}/>
          
    <Nav_Route position="#/groups" name={"Study Groups"} current={current} Transition={Transition}/>

    <Nav_Route position="#/homework" name={"Homework help"} current={current} Transition={Transition}/>

    <Nav_Route position="#/algebra" name={"Algebra"} current={current} Transition={Transition}/>
        </ul>
                
            </div>
        </animated.div>
    )
}