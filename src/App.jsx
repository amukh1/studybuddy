import './App.css'

import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import { useEffect, useState } from "react";
// import { withRouter } from "react-router";

import Nav from './nav.jsx'
import Home from './routes/Home'
import Groups from './routes/Groups'
import Homework from './routes/Homework'
import Algebra from './routes/Algebra'

export default function App() {
  return (
    <main>
      <Nav />
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/homework" element={<Homework />} />
          <Route path="/algebra" element={<Algebra />} /> 
        </Routes>
      </Router>
    </main>
  )
}
